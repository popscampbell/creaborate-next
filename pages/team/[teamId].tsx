import {
  Alert,
  Button,
  ButtonGroup,
  Collection,
  ComboBoxOption,
  Divider,
  Flex,
  Loader,
  Text,
  useTheme
} from "@aws-amplify/ui-react"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, SnackbarProps } from "@mui/material"
import { DataStore } from "aws-amplify"
import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import PageSection from "components/PageSection"
import NewTaskDialog from "components/task/NewTaskDialog"
import TasksTable from "components/task/TasksTable"
import TeamMemberForm from "components/team/TeamMemberForm"
import TeamMemberPill from "components/team/TeamMemberPill"
import TeamUpdateForm from "components/team/TeamUpdateForm"
import useCurrentUserTeamRole from "hooks/useCurrentUserTeamRole"
import useTeam from "hooks/useTeam"
import { TeamMemberWithName, useTeamMembersByTeam } from "hooks/useTeamMembers"
import _ from "lodash"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { MdAdd, MdSettings } from "react-icons/md"
import { Team, TeamMember, TeamMemberRole } from "src/models"

export default function TeamPage() {
  const { tokens } = useTheme()
  const router = useRouter()
  const { teamId } = router.query
  const team = useTeam(teamId as string, true)
  const role = useCurrentUserTeamRole(teamId as string)

  const [showForm, setShowForm] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [snackbarState, setSnackbarState] = React.useState<SnackbarProps>({ open: false, message: ""})

  function handleSettingsClick() {
    setShowForm(true)
  }

  function handleSnackbarClose() {
    setSnackbarState({ open: false, message: ""})
  }

  function handleUpdateSuccess() {
    setSnackbarState({ open: true, message: "Saved" })
    setShowForm(false)
  }

  function handleCancel() {
    setShowForm(false)
  }

  function TeamMembersSection(props: { team: Team }) {
    const { team } = props

    const teamMembers = useTeamMembersByTeam(team)

    function handleDismissTeamMember(teamMember: TeamMemberWithName) {
      if (teamMember.role !== TeamMemberRole.ADMINISTRATOR) {
        DataStore.delete(TeamMember, tm => tm.id.eq(teamMember.id))
          .then(() => setSnackbarState({ open: true, message: `${teamMember.name} (${teamMember.username}) dismissed.` }))
      }
    }

    return teamMembers? (
      <PageSection
        heading="Members"
        actions={
          <ButtonGroup>
            <Button onClick={handleOpenDialog} size="small" variation="link">
              <MdAdd />
            </Button>
          </ButtonGroup>
        }
      >
        {team && <Collection
          type="list"
          items={teamMembers ?? []}
          direction="row"
          wrap="wrap"
          marginBottom={tokens.space.medium}
        >
          {(item) => (
            <TeamMemberPill
              teamMember={item}
              isDismissable={role === TeamMemberRole.ADMINISTRATOR && item.role !== TeamMemberRole.ADMINISTRATOR}
              onDismiss={handleDismissTeamMember} />
          )}
        </Collection>}
        <TeamMemberDialog onAdd={handleAddUsers}/>
      </PageSection>
    ) : <Loader/>
  }

  function TeamMemberDialog(props: {
    onAdd: (usernames: string[]) => void
  }) {
    const { onAdd } = props

    const [selectedUsers, setSelectedUsers] = React.useState<ComboBoxOption[]>([])

    function handleSelect(option: ComboBoxOption) {
      setSelectedUsers([ ..._.clone(selectedUsers), option])
    }

    function handleCloseDialog() {
      setSelectedUsers([])
      setDialogOpen(false)
    }

    function handleCancelDialog() {
      setSelectedUsers([])
      setDialogOpen(false)
    }

    function handleAcceptDialog() {
      onAdd(selectedUsers.map(u => u.id))
      setDialogOpen(false)
    }

    return (
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Invite</DialogTitle>
        <DialogContent>
          <DialogContentText marginBottom={2}>
            Use the field below to find someone in the system you can invite to {team?.name}.
          </DialogContentText>
          <TeamMemberForm
            onSelect={handleSelect}
            filter={option => selectedUsers.find(item => item.id === option.id) ? false : true}
          />
          <Flex marginBottom={120}>
            <Collection
              type="list"
              items={selectedUsers}
              children={(item) => (
                <Text key={item.id}>{item.label} ({item.id})</Text>
              )}
              searchNoResultsFound={<></>}
              />
            </Flex>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDialog}>Cancel</Button>
          <Button onClick={handleAcceptDialog}>Add</Button>
        </DialogActions>
      </Dialog>
    )
  }

  function handleOpenDialog() {
    setDialogOpen(true)
  }

  function handleAddUsers(usernames: string[]) {
    if (team) {
      usernames.forEach(async username => {
        await DataStore.save(new TeamMember({
          teamID: team.id,
          username,
          role: TeamMemberRole.MEMBER,
        }))
      })
    }
  }

  function TasksSection(props: { team: Team }) {
    const { team } = props

    const [dialogOpen, setDialogOpen] = React.useState(false)

    function handleAddTask() {
      setDialogOpen(true)
    }

    function handleDialogCancel() {
      setDialogOpen(false)
    }

    function handleDialogSaved() {
      setDialogOpen(false)
      setSnackbarState({ open: true, message: "Task created"})
    }

    return (
      <PageSection heading="Tasks" marginTop={24}
        actions={<ButtonGroup>
          <Button onClick={handleAddTask} size="small" variation="link">
            <MdAdd />
          </Button>
        </ButtonGroup>}>
        <TasksTable teamId={team.id} />
        <NewTaskDialog teamID={team.id} open={dialogOpen} onSaved={handleDialogSaved} onCancel={handleDialogCancel} />
      </PageSection>
    )
  }

  return team? (
    <>
      <Head>
        <title>Creaborate - {team?.name}</title>
      </Head>
      <Layout>
        <Page>
          <PageHeader
            title={team?.name || ""}
            subtitle={team?.description}
            actions={
              <ButtonGroup>
                <Button onClick={handleSettingsClick}>
                  <MdSettings />
                </Button>
              </ButtonGroup>
            }
          ></PageHeader>

          {showForm && (
            <TeamUpdateForm
              team={team}
              onSuccess={handleUpdateSuccess}
              onCancel={handleCancel}
            />
          )}

          <Divider />
          <TeamMembersSection team={team} />
          <Divider />
          <TasksSection team={team} />
        </Page>

        <Snackbar open={snackbarState.open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert isDismissible onDismiss={handleSnackbarClose} variation="success">Saved</Alert>
        </Snackbar>
      </Layout>
    </>
  ) : <Loader/>
}

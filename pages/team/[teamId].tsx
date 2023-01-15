import {
  Alert,
  Button,
  ButtonGroup,
  Collection,
  ComboBoxOption,
  Divider,
  Flex, Placeholder,
  Text,
  useTheme
} from "@aws-amplify/ui-react"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, SnackbarProps } from "@mui/material"
import { useAppSelector } from "app/hooks"
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
import { TeamMemberWithName } from "features/teams/teamSlice"
import { TeamWithUserRole } from "features/user/userSlice"
import _ from "lodash"
import { useRouter } from "next/router"
import React from "react"
import { MdAdd, MdSettings } from "react-icons/md"
import { Task, Team, TeamMember, TeamMemberRole } from "src/models"

export default function TeamPage() {
  const { tokens } = useTheme()
  const router = useRouter()

  const { teamID } = router.query as { teamID: string }

  const teamState = useAppSelector((state) => state.team)
  const {team} = teamState

  const [showForm, setShowForm] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [snackbarState, setSnackbarState] = React.useState<SnackbarProps>({ open: false, message: ""})

  function TeamPageBody() {
    return (
      <Page title={team?.name} context="Team">
        {team ? (
          <>
            <PageHeader
              title={team.name || ""}
              subtitle={team.description}
              actions={
                <ButtonGroup>
                  <Button onClick={handleSettingsClick}>
                    <MdSettings />
                  </Button>
                </ButtonGroup>
              }
            />
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
          </>
        ) : <Placeholder />}
      </Page>
    )
  }

  function handleSettingsClick() {
    setShowForm(true)
  }

  function handleSnackbarClose() {
    setSnackbarState({ open: false, message: "" })
  }

  function handleUpdateSuccess() {
    setSnackbarState({ open: true, message: "Saved" })
    setShowForm(false)
  }

  function handleCancel() {
    setShowForm(false)
  }

  function TeamMembersSection(props: { team: TeamWithUserRole }) {
    const { team } = props

    const teamMembers = useAppSelector(state => state.team.members)

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
          {(teamMember) => (
            <TeamMemberPill
              key={teamMember.username}
              teamMember={teamMember}
              isDismissable={team.role === TeamMemberRole.ADMINISTRATOR && teamMember.role !== TeamMemberRole.ADMINISTRATOR}
              onDismiss={handleDismissTeamMember} />
          )}
        </Collection>}
        <TeamMemberDialog onAdd={handleAddUsers}/>
      </PageSection>
    ) : <Placeholder/>
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

  function TasksSection(props: { team: TeamWithUserRole }) {
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

    function handleTaskSaved(task: Task) {
      setSnackbarState({ open: true, message: "Saved"})
    }

    return (
      <PageSection heading="Tasks" marginTop={24}
        actions={<ButtonGroup>
          <Button onClick={handleAddTask} size="small" variation="link">
            <MdAdd />
          </Button>
        </ButtonGroup>}>
        <TasksTable onTaskSaved={handleTaskSaved} />
        <NewTaskDialog teamID={team.id} open={dialogOpen} onSaved={handleDialogSaved} onCancel={handleDialogCancel} />
      </PageSection>
    )
  }

  return (
      <Layout teamID={teamID}>
        <TeamPageBody/>
        <Snackbar open={snackbarState.open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert isDismissible onDismiss={handleSnackbarClose} variation="success">Saved</Alert>
        </Snackbar>
      </Layout>
  )
}

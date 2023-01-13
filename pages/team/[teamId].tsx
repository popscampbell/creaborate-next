import Head from "next/head"
import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import TeamUpdateForm from "components/team/TeamUpdateForm"
import useTeam from "hooks/useTeam"
import React from "react"
import { TeamMemberWithName, useTeamMembersByTeam } from "hooks/useTeamMembers"
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Collection,
  ComboBoxOption,
  Divider,
  Flex,
  Loader,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react"
import { Team, TeamMember, TeamMemberRole } from "src/models"
import { MdAdd, MdClose, MdLocalPolice, MdSettings } from "react-icons/md"
import PageSection from "components/PageSection"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from "@mui/material"
import TeamMemberForm from "components/team/TeamMemberForm"
import _ from "lodash"
import { DataStore } from "aws-amplify"
import useCurrentUserTeamRole from "hooks/useCurrentUserTeamRole"
import useTeamTasks from "components/team/useTeamTasks"

type SnackbarProps = { open: boolean, message: string }

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

  function TeamMemberSection(props: { team: Team }) {
    const { team } = props

    const teamMembers = useTeamMembersByTeam(team)

    function handleDismissTeamMember(teamMember: TeamMemberWithName) {
      if (teamMember.role !== TeamMemberRole.ADMINISTRATOR) {
        DataStore.delete(TeamMember, tm => tm.id.eq(teamMember.id))
          .then(() => setSnackbarState({ open: true, message: `${teamMember.name} (${teamMember.username}) dismissed.` }))
      }
    }

    return (
      <Collection
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
      </Collection>
    )
  }

  function TeamMemberPill(props: {
    teamMember: TeamMemberWithName
    isDismissable?: boolean
    onDismiss?: (item: TeamMemberWithName) => void
  }) {
    const { teamMember, isDismissable, onDismiss } = props

    return (
      <Card
        key={teamMember.id}
        variation="outlined"
        borderRadius={tokens.radii.large}
        paddingInline={tokens.space.small}
        paddingBlock={tokens.space.xs}
      >
        <Flex columnGap={tokens.space.xxxs} alignItems="center">
          {teamMember.role === TeamMemberRole.ADMINISTRATOR && (
            <MdLocalPolice />
          )}
          <Text>{teamMember.name}</Text>
          {isDismissable && (
            <Button
              onClick={() => onDismiss?.(teamMember)}
              padding={tokens.space.zero}
              marginLeft={tokens.space.xxxs}
              variation="destructive">
              <MdClose size={tokens.fontSizes.small.value} />
            </Button>
          )}
        </Flex>
      </Card>
    )
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

  function TasksSection() {
    const tasks = useTeamTasks(team?.id ?? "")

    function handleAddTask() {
      alert("Add a task!")
    }

    return (
      <PageSection heading="Tasks" marginTop={24}
        actions={<ButtonGroup>
          <Button onClick={handleAddTask} size="small" variation="link">
                  <MdAdd />
                </Button>
        </ButtonGroup>}>
        <Flex>
          {tasks && <Collection
            type="grid"
            items={tasks}
            searchNoResultsFound="No tasks"
          >
            {task => (
              <Text>{task.name}</Text>
            )}
          </Collection>}
          {!tasks && <Loader/>}
        </Flex>
      </PageSection>
    )
  }

  return (
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
            {team && <TeamMemberSection team={team} />}
            <TeamMemberDialog onAdd={handleAddUsers}/>
          </PageSection>
        </Page>

        <Divider />

        <TasksSection />

        <Snackbar open={snackbarState.open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert isDismissible onDismiss={handleSnackbarClose} variation="success">Saved</Alert>
        </Snackbar>
      </Layout>
    </>
  )
}

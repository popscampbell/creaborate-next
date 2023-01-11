import Head from "next/head"
import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import TeamUpdateForm from "components/team/TeamUpdateForm"
import useTeam from "hooks/useTeam"
import React from "react"
import { useTeamMembersByTeam } from "hooks/useTeamMembers"
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Collection,
  Flex,
  Text,
  useTheme,
} from "@aws-amplify/ui-react"
import { Team, TeamMemberRole } from "src/models"
import { MdAdd, MdLocalPolice, MdSettings } from "react-icons/md"
import PageSection from "components/PageSection"
import { Snackbar } from "@mui/material"

type SnackbarProps = { open: boolean, message: string }

export default function TeamPage() {
  const { tokens } = useTheme()
  const router = useRouter()
  const { teamId } = router.query
  const team = useTeam(teamId as string, true)

  const [showForm, setShowForm] = React.useState(false)
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

    return (
      <Collection
        type="list"
        items={teamMembers || []}
        direction="row"
        wrap="wrap"
      >
        {(item) => (
          <Card
            key={item.id}
            variation="outlined"
            borderRadius={tokens.radii.large}
            paddingInline={tokens.space.small}
            paddingBlock={tokens.space.xs}
          >
            <Flex columnGap={tokens.space.xxxs} alignItems="center">
              {item.role === TeamMemberRole.ADMINISTRATOR && (
                <MdLocalPolice />
              )}
              <Text>{item.name}</Text>
            </Flex>
          </Card>
        )}
      </Collection>
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

          <PageSection
            heading="Members"
            actions={
              <ButtonGroup>
                <Button size="small" variation="link">
                  <MdAdd />
                </Button>
              </ButtonGroup>
            }
          >
            {team && <TeamMemberSection team={team} />}
          </PageSection>
        </Page>
        <Snackbar open={snackbarState.open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert isDismissible onDismiss={handleSnackbarClose} variation="success">Saved</Alert>
        </Snackbar>
      </Layout>
    </>
  )
}

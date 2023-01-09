import Head from "next/head"
import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import { useRouter } from "next/router"
import TeamUpdateForm from "components/forms/TeamUpdateForm"
import useTeam from "hooks/useTeam"
import React from "react"
import useTeamMembers from "hooks/useTeamMembers"
import {
  Button,
  ButtonGroup,
  Card,
  Collection,
  Flex,
  Text,
  useTheme,
} from "@aws-amplify/ui-react"
import { TeamMemberRole } from "models"
import { MdAdd, MdLocalPolice, MdSettings } from "react-icons/md"
import PageSection from "components/PageSection"

export default function TeamPage() {
  const { tokens } = useTheme()
  const router = useRouter()
  const { teamId } = router.query
  const team = useTeam(teamId as string)
  const teamMembers = useTeamMembers(teamId as string)

  const [showForm, setShowForm] = React.useState(false)

  function handleSettingsClick() {
    setShowForm(true)
  }

  function handleUpdateFormSuccess() {
    setShowForm(false)
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
              onSuccess={handleUpdateFormSuccess}
              onCancel={handleUpdateFormSuccess}
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
            {teamMembers?.length && (
              <Collection
                type="list"
                items={teamMembers}
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
            )}
          </PageSection>
        </Page>
      </Layout>
    </>
  )
}

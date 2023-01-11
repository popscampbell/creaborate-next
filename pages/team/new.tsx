import Head from "next/head"
import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import TeamCreateForm from "components/team/TeamCreateForm"
import { TeamCreateFormInputValues } from "ui-components/TeamCreateForm"
import { useRouter } from "next/router"
import { DataStore } from "aws-amplify"
import { TeamMember } from "src/models"

export default function NewTeamPage() {
  const router = useRouter()

  async function handleSuccess(values: TeamCreateFormInputValues, id: string) {

    // const savedTeamMember = await DataStore.save(
    //   new TeamMember( {
    //     teamID: id,
    //     username: user.username,
    //     role: TeamMemberRole.ADMINISTRATOR,
    //   } )
    // ).catch( error => console.error( "Error creating team member for", user.username, ":", error ) )

    // console.log("after save teammember, saveTeamMember:", savedTeamMember)

    router.push("/team/[teamId]", `/team/${encodeURIComponent(id)}`)
  }

  return (
    <Page>
      <Head>
        <title>Creaborate - new team</title>
      </Head>
      <Layout>
        <PageHeader title="New team"></PageHeader>
        <TeamCreateForm onSuccess={handleSuccess} />
      </Layout>
    </Page>
  )
}

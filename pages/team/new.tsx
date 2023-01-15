import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import TeamCreateForm from "components/team/TeamCreateForm"
import { useRouter } from "next/router"
import { TeamCreateFormInputValues } from "ui-components/TeamCreateForm"

export default function NewTeamPage() {
  const router = useRouter()

  async function handleSuccess(values: TeamCreateFormInputValues, id: string) {
    router.push("/team/[teamId]", `/team/${encodeURIComponent(id)}`)
  }

  return (
    <Layout>
      <Page title={"New team"}>
        <PageHeader title="New team"></PageHeader>
        <TeamCreateForm onSuccess={handleSuccess} />
      </Page>
      </Layout>
  )
}

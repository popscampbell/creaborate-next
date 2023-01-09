import Head from "next/head"
import Layout from "components/Layout"
import Page from "components/Page"
import PageHeader from "components/PageHeader"
import TeamCreateForm from "components/forms/TeamCreateForm"
import { TeamCreateFormInputValues } from "ui-components/TeamCreateForm"
import { useRouter } from "next/router"

export default function NewTeamPage() {
  const router = useRouter()

  function handleSuccess(values: TeamCreateFormInputValues, id: number) {
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

import { useAuthenticator } from "@aws-amplify/ui-react"
import Head from "next/head"
import Layout from "../components/Layout"
import Page from "../components/Page"
import PageHeader from "../components/PageHeader"
import UserProfileForm from "../components/UserProfileForm"
import useNewOrExistingUserProfile from "../hooks/useNewOrExistingUserProfile"

export default function UserProfilePage() {
  const { user } = useAuthenticator()
  const userProfile = useNewOrExistingUserProfile()

  return (
    <Page>
      <Head>
        <title>Creaborate - {user?.username}&apos;s profile</title>
        <meta name="description" content="Create something together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader title={`${user?.username}'s user profile`}></PageHeader>
        {userProfile && <UserProfileForm userProfile={userProfile} />}
      </Layout>
    </Page>
  )
}

import { useAuthenticator } from "@aws-amplify/ui-react"
import UserProfileCreateForm from "components/user/UserProfileCreateForm"
import UserProfileUpdateForm from "components/user/UserProfileUpdateForm"
import Layout from "../components/Layout"
import Page from "../components/Page"
import PageHeader from "../components/PageHeader"
import useNewOrExistingUserProfile from "../hooks/useNewOrExistingUserProfile"

export default function UserProfilePage() {
  const { user } = useAuthenticator()
  const userProfile = useNewOrExistingUserProfile()

  return (
    <Page title={`${user?.username}'s user profile`}>
      <Layout>
        <PageHeader title={`${user?.username}'s user profile`}></PageHeader>
        {userProfile?.id ? (
          <UserProfileUpdateForm userProfile={userProfile} />
        ) : (
          <UserProfileCreateForm />
        )}
      </Layout>
    </Page>
  )
}

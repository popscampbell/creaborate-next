import { Alert, useAuthenticator } from "@aws-amplify/ui-react"
import { Snackbar } from "@mui/material"
import UserProfileCreateForm from "components/user/UserProfileCreateForm"
import UserProfileUpdateForm from "components/user/UserProfileUpdateForm"
import React from "react"
import Layout from "../components/Layout"
import Page from "../components/Page"
import PageHeader from "../components/PageHeader"
import useNewOrExistingUserProfile from "../hooks/useNewOrExistingUserProfile"

type SnackbarProps = { open: boolean, message: string }

export default function UserProfilePage() {
  const { user } = useAuthenticator()
  const userProfile = useNewOrExistingUserProfile()
  const [snackbarState, setSnackbarState] = React.useState<SnackbarProps>({ open: false, message: ""})

  function handleSnackbarClose() {
    setSnackbarState({ open: false, message: ""})
  }

  function handleUpdateSuccess() {
    setSnackbarState({ open: true, message: "Saved" })
  }

  return (
    <Page title={`${user?.username}'s user profile`}>
      <Layout>
        <PageHeader title={`${user?.username}'s user profile`}></PageHeader>
        {userProfile?.id ? (
          <UserProfileUpdateForm userProfile={userProfile} onSuccess={handleUpdateSuccess} />
        ) : (
          <UserProfileCreateForm />
        )}
        <Snackbar open={snackbarState.open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert isDismissible onDismiss={handleSnackbarClose} variation="success">Saved</Alert>
        </Snackbar>
      </Layout>
    </Page>
  )
}

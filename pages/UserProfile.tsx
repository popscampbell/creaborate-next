import { Alert } from "@aws-amplify/ui-react"
import { Snackbar } from "@mui/material"
import { useAppSelector } from "app/hooks"
import UserProfileCreateForm from "components/user/UserProfileCreateForm"
import UserProfileUpdateForm from "components/user/UserProfileUpdateForm"
import React from "react"
import Layout from "../components/Layout"
import Page from "../components/Page"
import PageHeader from "../components/PageHeader"

type SnackbarProps = { open: boolean, message: string }

export default function UserProfilePage() {
  const user = useAppSelector(state => state.user)
  const [snackbarState, setSnackbarState] = React.useState<SnackbarProps>({ open: false, message: ""})

  function handleSnackbarClose() {
    setSnackbarState({ open: false, message: ""})
  }

  function handleUpdateSuccess() {
    setSnackbarState({ open: true, message: "Saved" })
  }

  return (
    <Layout>
      <Page title={`${user.username}'s user profile`} context="User">
        <PageHeader title={`${user?.username}'s user profile`}></PageHeader>
        {user.profile ? (
          <UserProfileUpdateForm userProfile={user.profile} onSuccess={handleUpdateSuccess} />
        ) : (
          <UserProfileCreateForm />
        )}
        <Snackbar open={snackbarState.open} anchorOrigin={{ vertical: "top", horizontal: "right" }} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert isDismissible onDismiss={handleSnackbarClose} variation="success">Saved</Alert>
        </Snackbar>
      </Page>
    </Layout>
  )
}

import { Auth, DataStore } from "aws-amplify"
import { UserProfile, UserProfileVisibility } from "../src/models"
import React from "react"

export default function useNewOrExistingUserProfile() {
  const [userProfile, setUserProfile] = React.useState<UserProfile>()

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) =>
      DataStore.query(UserProfile, (profile) =>
        profile.username.eq(user.username)
      )
        .then((results) =>
          results?.length
            ? results[0]
            : new UserProfile({
              username: user.username,
              name: "",
              searchName: "",
              visibility: UserProfileVisibility.PUBLIC,
            })
        )
        .then((profile) => setUserProfile(profile))
    )
  }, [])

  return userProfile
}

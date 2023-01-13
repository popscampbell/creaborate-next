import { DataStore } from "aws-amplify"
import React from "react"
import { UserProfile } from "src/models"

export default function useSearchUsers(query: string, max?: number) {
  const [users, setUsers] = React.useState<UserProfile[]>([])

  React.useEffect(() => {
    if (query) {
      DataStore.query(UserProfile, up => up.searchName.contains(query.toLowerCase()), { limit: max ?? 5 })
        .then(profiles => setUsers(profiles))
    } else {
      setUsers([])
    }
  }, [query])
  return users
}
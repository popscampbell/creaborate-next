import { Auth, DataStore } from "aws-amplify"
import React from "react"
import { TeamMember, TeamMemberRole } from "src/models"

export default function useCurrentUserTeamRole(teamId: string) {
  const [role, setRole] = React.useState<TeamMemberRole>()

  React.useEffect(() => {
    if (teamId) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          if (user.username) {
            DataStore.query(TeamMember, tm => tm.and(tm => [
              tm.username.eq(user.username),
              tm.teamID.eq(teamId),
            ])
            ).then(rows => {
              rows.length && setRole(rows[0].role as TeamMemberRole)
            })
          }
        })
    } else {
      setRole(undefined)
    }
  }, [teamId])

  return role
}
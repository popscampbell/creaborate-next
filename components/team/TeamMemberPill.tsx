import { Text, useTheme } from "@aws-amplify/ui-react"
import Pill from "components/Pill"
import { TeamMemberWithName } from "features/teams/teamSlice"
import { MdLocalPolice } from "react-icons/md"
import { TeamMemberRole } from "src/models"

export default function TeamMemberPill(props: {
  teamMember: TeamMemberWithName
  isDismissable?: boolean
  onDismiss?: (teamMember: TeamMemberWithName) => void
}) {
  const { teamMember, isDismissable, onDismiss } = props

  const { tokens } = useTheme()

  function handleDismiss() {
    onDismiss?.(teamMember)
  }

  return (
    <Pill isDismissable={isDismissable} onDismiss={handleDismiss}>
      {teamMember.role === TeamMemberRole.ADMINISTRATOR && (
        <MdLocalPolice />
      )}
      <Text>{teamMember.name}</Text>
    </Pill>
  )
}
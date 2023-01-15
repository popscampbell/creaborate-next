import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useTheme,
  VisuallyHidden
} from "@aws-amplify/ui-react"
import { useAppSelector } from "app/hooks"
import Link from "next/link"
import { useRouter } from "next/router"
import { MdAdd } from "react-icons/md"
import ProjectList from "./project/ProjectList"

export default function SummaryBar() {
  const { tokens } = useTheme()
  const {team: teamState, user, context} = useAppSelector(state => state)
  const router = useRouter()

  function handleAddTeam() {
    // router.push("/team/new")
  }

  function SummaryBarSection(props: {
    heading: string
    children: any
    actions?: any
  }) {
    const { heading, children, actions } = props

    return (
      <Flex direction="column" rowGap={tokens.space.xxs}>
        <Flex
          marginBlockStart={tokens.space.xl}
          marginBlockEnd={tokens.space.small}
        >
          <Heading
            level={3}
            grow={1}
            fontWeight={tokens.fontWeights.normal}
            fontSize={tokens.fontSizes.large}
          >
            {heading}
          </Heading>
          {actions}
        </Flex>
        {children}
      </Flex>
    )
  }

  return (
    <Flex
      as="nav"
      direction="column"
      width={200}
      paddingRight={tokens.space.medium}
      style={{ borderRightStyle: "solid", borderRightWidth: "1px", borderRightColor: tokens.colors.border.secondary.value }}
    >
      <VisuallyHidden>
        <Heading level={2}>Summary</Heading>
      </VisuallyHidden>

      <SummaryBarSection
        heading="My teams"
        actions={
          <Button size="small" variation="link" onClick={handleAddTeam}>
            <MdAdd />
          </Button>
        }
      >
        {user.teams?.length && user.teams.length > 0 ? (
          user.teams.map((team) => (
            <Link key={team.id} href={`/team/${encodeURIComponent(team.id)}`}>
              {team?.name}
            </Link>
          ))
        ) : (
          <Text>No teams</Text>
        )}
      </SummaryBarSection>

      {context.area === "Team" && teamState.team && (
        <SummaryBarSection
          heading="Team projects"
        >
          <ProjectList teamID={teamState.team.id} />
        </SummaryBarSection>
      )}

      <Divider />
    </Flex>
  )
}

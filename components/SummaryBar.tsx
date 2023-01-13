import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useTheme,
  VisuallyHidden,
} from "@aws-amplify/ui-react"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { createTeam } from "features/teams/teamsSlice"
import Link from "next/link"
import { useRouter } from "next/router"
import { MdAdd } from "react-icons/md"

export default function SummaryBar() {
  const { tokens } = useTheme()
  const teams = useAppSelector(state => state.teams.teams)
  const dispatch = useAppDispatch()
  const router = useRouter()

  function handleAddTeam() {
    // router.push("/team/new")
    dispatch(createTeam({
      name: "New team",
      description: "New team description"
    }))
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
        {teams?.length && teams.length > 0 ? (
          teams.map((team, index) => (
            <Link key={team?.id || index} href="/team/[teamId]" as={`/team/${team?.id}`}>
              {team?.name}
            </Link>
          ))
        ) : (
          <Text>No teams</Text>
        )}
      </SummaryBarSection>

      <Divider />
    </Flex>
  )
}

import { Flex, Text, useAuthenticator, useTheme } from "@aws-amplify/ui-react"
import { useAppSelector } from "app/hooks"
import Link from "next/link"

export default function AppBar() {
  const { tokens } = useTheme()

  const { user } = useAuthenticator()
  const data = useAppSelector(state => state)

  return (
    <Flex
      as="header"
      alignItems="baseline"
      paddingBottom={16}
      backgroundColor="background.secondary"
      padding={tokens.space.medium}
    >
      <Flex alignItems="baseline">
        <Text variation="primary" fontSize="xl">
          <Link href="/">
            Creaborate<sup style={{ fontSize: "small" }}>&reg;</sup>
          </Link>
        </Text>
      </Flex>

      <Flex grow={1} justifyContent="center">
      </Flex>

      <Flex
        justifyContent="flex-end"
        alignItems="baseline"
        columnGap={tokens.space.xxxs}
      >
        <Link href="/UserProfile">{user && user.username}</Link>
      </Flex>
    </Flex>
  )
}

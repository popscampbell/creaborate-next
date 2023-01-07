import {
  Flex,
  Text,
  useTheme
} from "@aws-amplify/ui-react"
import Link from "next/link"

export default function AppBar() {
  const { tokens } = useTheme()

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
        Hey
      </Flex>

      <Flex
        justifyContent="flex-end"
        alignItems="baseline"
        columnGap={tokens.space.xxxs}
      >
        Hi
      </Flex>
    </Flex>
  )
}

import { Authenticator, Flex, useTheme } from "@aws-amplify/ui-react"

export default function Page(props: { children: any }) {
  const { children } = props
  const { tokens } = useTheme()

  return (
    <Flex direction="column" marginBlockStart={tokens.space.medium}>
      {children}
    </Flex>
  )
}

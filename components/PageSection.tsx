import { Flex, Heading, useTheme } from "@aws-amplify/ui-react"

export default function PageSection(props: {
  heading: string
  children: any
  actions?: any
}) {
  const { heading, children, actions } = props
  const { tokens } = useTheme()

  return (
    <Flex direction="column">
      <Flex>
        <Heading
          level={2}
          grow={1}
          fontSize={tokens.fontSizes.xl}
          fontWeight={tokens.fontWeights.normal}
        >
          {heading}
        </Heading>
        <Flex>{actions}</Flex>
      </Flex>
      {children}
    </Flex>
  )
}

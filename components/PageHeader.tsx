import {
  Flex,
  Heading,
  useTheme,
  ButtonGroup,
  Text,
} from "@aws-amplify/ui-react"
import React from "react"

export default function PageHeader(props: {
  title: string
  subtitle?: string
  actions?: React.ReactNode
}) {
  const { title, subtitle, actions } = props
  const { tokens } = useTheme()

  return (
    <>
      <Flex marginBottom={tokens.space.zero} alignItems="baseline">
        <Heading grow={1} paddingBlock={tokens.space.zero} level={1}>
          {title}
        </Heading>
        <ButtonGroup>{actions}</ButtonGroup>
      </Flex>
      <Text fontSize={tokens.fontSizes.large}>{subtitle}</Text>
    </>
  )
}

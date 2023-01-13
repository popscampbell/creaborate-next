import { useTheme, Card, Flex, Button } from "@aws-amplify/ui-react"
import { MdClose } from "react-icons/md"

export default function Pill(props: {
  isDismissable?: boolean
  onDismiss?: () => void
  children: any
}) {
  const { isDismissable, onDismiss, children } = props

  const { tokens } = useTheme()

  return (
    <Card
      variation="outlined"
      borderRadius={tokens.radii.large}
      paddingInline={tokens.space.small}
      paddingBlock={tokens.space.xs}
    >
      <Flex columnGap={tokens.space.xxxs} alignItems="center">
        {children}
        {isDismissable && (
          <Button
            onClick={() => onDismiss?.()}
            padding={tokens.space.zero}
            marginLeft={tokens.space.xxxs}
            variation="destructive">
            <MdClose size={tokens.fontSizes.small.value} />
          </Button>
        )}
      </Flex>
    </Card>
  )
}
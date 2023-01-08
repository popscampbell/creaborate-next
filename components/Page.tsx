import { Authenticator } from "@aws-amplify/ui-react"

export default function Page(props: { children: any }) {
  const { children } = props

  return (
      <>{children}</>
  )
}
import { Authenticator, Flex, useTheme } from "@aws-amplify/ui-react"
import Head from "next/head"

export default function Page(props: { title?: string, children: any }) {
  const { title, children } = props
  const { tokens } = useTheme()

  return (
    <>
      <Head>
        <title>{title || "Creaborate"}</title>
        <meta name="description" content="Create something together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" marginBlockStart={tokens.space.medium}>
        {children}
      </Flex>
    </>
  )
}

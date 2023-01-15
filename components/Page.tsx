import { Flex, useTheme } from "@aws-amplify/ui-react"
import { ContextArea, setContextArea } from "features/contextSlice"
import Head from "next/head"
import React from "react"
import { useDispatch } from "react-redux"

export default function Page(props: {
  title?: string
  children: any
  context?: ContextArea
}) {
  const { title, children, context } = props
  const { tokens } = useTheme()

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setContextArea(context ?? "Home"))
  }, [])

  return (
    <>
      <Head>
        <title>{`Creaborate${title? ` - ${title}`: ""}`}</title>
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

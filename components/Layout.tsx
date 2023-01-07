import { Authenticator, defaultDarkModeOverride, Divider, Flex, ThemeProvider, useTheme } from "@aws-amplify/ui-react"
import AppBar from "./AppBar"
import Footer from "./Footer"
import React from "react"
import { Amplify, Auth } from "aws-amplify"
import awsconfig from "../src/aws-exports"
import "@aws-amplify/ui-react/styles.css"

export default function Layout(props: { children: any }) {
  const { tokens } = useTheme()

  const appTheme = {
    name: "creaborate-theme",
    overrides: [defaultDarkModeOverride]
  }

  Amplify.configure(awsconfig)
  Auth.configure(awsconfig)

  return (
    <ThemeProvider theme={appTheme} colorMode={"system"}>
      <Flex
        direction="column"
        backgroundColor={tokens.colors.background.primary}
        color={tokens.colors.font.primary}
        minHeight="100vh"
      >
        <AppBar />

        <Flex direction="column" grow={1} paddingInline={tokens.space.medium}>
          <Authenticator>{({ signOut, user }) => <>{props.children}</>}</Authenticator>
        </Flex>

        <Footer />
      </Flex>
    </ThemeProvider>
  )
}

import {
  Authenticator,
  defaultDarkModeOverride,
  Flex,
  ThemeProvider,
  useTheme,
} from "@aws-amplify/ui-react"
import AppBar from "./AppBar"
import Footer from "./Footer"
import React from "react"
import SummaryBar from "./SummaryBar"
import { DataLoader } from "features/DataLoader"

export default function Layout(props: {
  teamID?: string
  children: any
}) {
  const { teamID, children } = props
  const { tokens } = useTheme()

  const appTheme = {
    name: "creaborate-theme",
    overrides: [defaultDarkModeOverride],
  }

  return (
    <ThemeProvider theme={appTheme} colorMode={"system"}>
      <DataLoader teamID={teamID}>
        <Flex
          direction="column"
          backgroundColor={tokens.colors.background.primary}
          color={tokens.colors.font.primary}
          minHeight="100vh"
          rowGap={tokens.space.zero}
        >
          <AppBar />

          <Flex
            direction="column"
            grow={1}
            rowGap={tokens.space.zero}
            paddingInline={tokens.space.medium}
          >
            <Authenticator>
              {({ signOut, user }) => (
                <Flex grow={1}>
                  <SummaryBar />
                  <Flex direction="column" grow={1} rowGap={tokens.space.zero}>
                    {props.children}
                  </Flex>
                </Flex>
              )}
            </Authenticator>
          </Flex>

          <Footer />
        </Flex>
      </DataLoader>
    </ThemeProvider>
  )
}

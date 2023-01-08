import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, Auth } from "aws-amplify"
import awsexports from "../aws-exports"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"

export default function App({ Component, pageProps }: AppProps) {
  Amplify.configure(awsexports)
  Auth.configure(awsexports)

  return (
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  )
}

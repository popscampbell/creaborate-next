import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, API, Auth } from "aws-amplify"
import awsexports from "../aws-exports"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { StrictMode } from "react"
import { Provider } from "react-redux"
import store from "app/store"

export default function App({ Component, pageProps }: AppProps) {
  Amplify.configure(awsexports)
  Auth.configure(awsexports)
  API.configure(awsexports)

  return (
    <Authenticator.Provider>
      <StrictMode>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </StrictMode>
    </Authenticator.Provider>
  )
}

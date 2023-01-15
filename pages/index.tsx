import { Inter } from "@next/font/google"
import Page from "components/Page"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <Page>
        <PageHeader title="Home"></PageHeader>
      </Page>
    </Layout>
  )
}

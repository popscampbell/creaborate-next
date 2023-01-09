import Head from "next/head"
import { Inter } from "@next/font/google"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Creaborate</title>
      </Head>
      <Layout>
        <PageHeader title="Home"></PageHeader>
      </Layout>
    </>
  )
}

import Head from 'next/head'
import { Inter } from '@next/font/google'
import AppBar from "../components/AppBar"
import Layout from "../components/Layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Creaborate</title>
        <meta name="description" content="Create something together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AppBar />
        </Layout>
    </>
  )
}

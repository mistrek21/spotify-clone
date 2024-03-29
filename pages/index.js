import Dashboard from "../components/Dashboard"
import Head from 'next/head'
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import Loader from "../components/Loader"

export default function Home() {
  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,

    onUnauthenticated() {
      router.push("/auth/sigin")
    }
  })

  if (status === "loading") return <Loader />

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  )
}

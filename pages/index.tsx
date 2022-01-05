import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      {/* TODO, move to layour component */}
      <Head>
        <title>PyCon LT</title>
        <meta name="description" content="PyCon LT conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
      <Link href="/events/2022">
        <a>2022</a>
      </Link>
      </main>

      {/* TODO move to layout component */}
      <footer>
        <a>
          Footer
        </a>
      </footer>
    </div>
  )
}

export default Home

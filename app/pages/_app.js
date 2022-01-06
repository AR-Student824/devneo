import '../styles/globals.css'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
          <title>Devneo</title>
          <meta name="description" content="Social platform for developers across the world. Share code snippets, new projects, ideas, job offers and more!" />
          <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp

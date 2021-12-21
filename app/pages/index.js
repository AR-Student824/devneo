import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devneo</title>
        <meta name="description" content="Social platform for developers across the world. Share code snippets, new projects, ideas, job offers and more!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <center>
          <h1 className={styles.title}>
          Introducing <span className="pink">Devneo</span>.
        </h1>

        <p className={styles.description}>
          Share and find code snippets, projects and ideas, all in one place.
        </p>
        </center>
    </main>
    </div>
  )
}


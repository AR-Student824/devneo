import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typed from 'typed.js'
import {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      startdelay: 1000,
      typeSpeed: 100,
      backDelay: 300,
      backSpeed: 100
    });
  }, [])
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
          A place for <span className="pink" id="typed">developers</span>.
        </h1>

        <div id="typed-strings" style={{display: "none"}}>
          <h1>developers</h1>
          <h1>code snippets</h1>
          <h1>projects</h1>
          <h1>ideas</h1>
          <h1>jobs</h1>
          <h1>APIs</h1>
          <h1>developers</h1>

        </div>

        <p className={styles.description}>
          Share and find code snippets, projects and ideas, all in one place.
        </p>

        <div className="cardGrid">
          <div className="card">
            <h3>Projects</h3>
            <p>Share your projects effectively.</p>
          </div>

          <div className="card">
            <h3>Code Snippets</h3>
            <p>Share and find useful code snippets.</p>
          </div>

          
        </div>
        </center>
    </main>
    </div>
  )
}


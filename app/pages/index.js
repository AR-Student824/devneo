import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typed from 'typed.js'
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles';
import { useSession, signIn, signOut } from "next-auth/client";
import Sidebar from './components/sidebar'
import PostBtn from './components/postBtn'


const Styles = makeStyles((theme) => ({
  disabledButton: {
    color: "whitesmoke !important",
    backgroundColor: "#302a36 !important"
  },
  pink: {
    color: "#eb64b9 !important"
  }
}));


export default function Home() {
  const s = Styles();
  useEffect(() => {
    if (document.getElementById('typed')) {
      var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        startdelay: 1000,
        typeSpeed: 100,
        backDelay: 300,
        backSpeed: 100
      });
    }
  }, [])

  const [session, loading] = useSession();

  if (loading) {
    return (
      <>
        <center>
          <CircularProgress />
        </center>
      </>
    )
  }

  if (!loading && !session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Devneo</title>
          <meta name="description" content="Social platform for developers across the world. Share code snippets, new projects, ideas, job offers and more!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main + " landingContent"}>
          <center>
            <h1 className={styles.title}>
              A place for <span className="pink" id="typed">developers</span>.
            </h1>

            <div id="typed-strings" style={{ display: "none" }}>
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

            <Button variant="contained" onClick={() => signIn('github')} className={s.disabledButton}>Coming Soon</Button>

            <div className="cardGrid">
              <div className="card">
                <h3>Projects</h3>
                <p>Share and discover projects effectively.</p>
              </div>

              <div className="card">
                <h3>Code Snippets</h3>
                <p>Share and find useful code snippets.</p>
              </div>

              <div className="card">
                <h3>Jobs</h3>
                <p>Hire developers and discover jobs for you.</p>
              </div>

              <div className="card">
                <h3>Ideas</h3>
                <p>Share ideas and build on ideas, all in one place.</p>
              </div>




            </div>
          </center>
        </main>
      </div>
    )
  }

  if (!loading && session) {
    return (
      <>
        <div className={styles.container}>
          <Head>
            <title>Devneo</title>
            <meta name="description" content="Social platform for developers across the world. Share code snippets, new projects, ideas, job offers and more!" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <Sidebar signout={() => signOut()} username={session.user.name} avatarUrl={session.user.image} />
            <div className="dashboardContent" style={{ paddingLeft: "25%" }}>
              <PostBtn click={() => {
                window.location.href = './new'
              }} classId={s.pink} />


              <h1 className={styles.title}>
                Discover <span className="pink">Opportunities</span>
              </h1>

              <p>Coming to a devneo near you... Soon.</p>

              <div className="cardGrid">
              <div className="card dashCard">
                <h3>Nice Balls</h3>
                <p><b><span className="w3-tag">💻 CSS SNIPPET</span></b>
                <b><span className="w3-tag">👤 AR</span></b>
                </p>
                <p>Shows you how to get nice balls</p>
              </div>

              <div className="card dashCard">
                <h3>FormRocket</h3>
                <p> <b><span className="w3-tag">💻 PROJECT</span></b>
                <b><span className="w3-tag">👤 AR</span></b>
                </p>
                <p>Create forms with ease</p>
              </div>
              </div>

            </div>
          </main>
        </div>
      </>

    )
  }
}


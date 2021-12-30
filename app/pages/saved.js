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
import SignIn from './components/signIn'


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
        <div className="landingContent">
          <center>
            <CircularProgress />
          </center>
        </div>
      </>
    )
  }

  if (!loading && !session) {
    return (
      <div className={styles.container}>


        <main className={styles.main + " landingContent"}>
            <SignIn signInFunction={() => signIn('github')} />
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

              <Image src="/postcard.png" alt="devneo icon" className="logo" width="150" height="150" />

              <h1 className={styles.title}>
                 <span className="pink">Saved</span> Posts
              </h1>

              <p>Welcome back to Devneo, {session.user.name}.</p>

              <div className="cardGrid">
                <div className="card dashCard">
                  <h3>Nice Balls</h3>
                  <p><b><span className="w3-tag">💻 CSS SNIPPET</span></b>{" "}<b><span className="w3-tag">👤 TIT</span></b>
                  </p>
                  <p>Shows you how to get nice balls</p>
                </div>

                <div className="card dashCard">
                  <h3>FormRocket</h3>
                  <p> <b><span className="w3-tag">💻 PROJECT</span></b>{" "}<b><span className="w3-tag">👤 AR</span></b>
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


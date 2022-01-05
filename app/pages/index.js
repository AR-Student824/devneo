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
          
  <div className="bg-white dark:bg-gray-800 overflow-x-hidden">
    <header aria-labelledby="parcel" className="pt-20 md:pt-16 pb-8 md:pb-16 relative">
      <div className="absolute top-0 left-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 dark:from-blue-700 dark:via-purple-800 dark:to-pink-800 transform -skew-y-6 -translate-y-28" style={{zIndex: "-1", width: "100%", height: "120%"}} role="presentation"></div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 box-border">
        <div className="flex flex-row items-center px-safe">
          <h1 id="parcel" className="text-red-400 h-10 lg:h-16">
            <span className="sr-only">Parcel</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row px-safe">
          <div className="lg:mr-12">
            <div className="flex flex-row items-center">
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white my-5 lg:my-10 leading-tight">
                The friendly space for {' '}
                <ul id="languageMarquee" className="inline-block align-top relative z-0 whitespace-nowrap">
                  <li><span className="text-pink-400">developers</span></li>
                </ul>
              </h2>
            </div>
            <p className="text-indigo-100 dark:text-purple-200 text-xl lg:text-2xl mb-8 lg:mb-16">Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.</p>
          </div>
          <div className="hidden lg:block bg-gray-100 dark:bg-gray-900 h-80 w-1/3 flex-shrink-0 rounded-md p-4 border-gray-200 dark:border-gray-800 border-solid border shadow-xl overflow-hidden">
            <div className="flex flex-row mb-4">
              <div className="bg-red-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
          <pre className="text-xs p-0 bg-transparent text-black dark:text-gray-200 font-semibold"><code prism-ignore><span className="font-normal" id="heroPrompt">$ </span><span className="w-2 h-3 align-middle inline-block bg-gray-500" style={{marginTop: "-2px"}} id="heroCursor"></span>
</code></pre>
        

      </div>
{/*
          <center>
          <Image src="/api-programming.png" width="540" height="327" alt="art"  />
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

            <Button variant="contained" onClick={() => window.location.href = './login'} className={s.disabledButton}>Get Started</Button>

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
</center>*/}
</div>
</div>
</header>
</div>
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
              <PostBtn classId={s.pink} />

             

              <Image src="/laptop.png" alt="devneo icon" className="logo" width="150" height="150" />

              <h1 className={styles.title}>
                Discover <span className="pink">Opportunities</span>
              </h1>

              <p>Welcome back to Devneo, {session.user.name}.</p>
              <h3 style={{marginTop: '1cm'}}>Top Posts (All time)</h3>
              <div className="cardGrid">
                <div className="card dashCard">
                  <h3>Nice Balls</h3>
                  <p><b><span className="w3-tag">💻 CSS SNIPPET</span></b>{" "}<b><span className="w3-tag">👤 TIT</span></b>
                  </p>
                  <p>Shows you how to get nice balls</p>
                </div>

                <div className="card dashCard">
                  <h3>FormRocket</h3>
                  <p> <b><span className="w3-tag">💻 WEBSITE</span></b>{" "}<b><span className="w3-tag">👤 AR</span></b>
                  </p>
                  <p>Create forms with ease</p>
                </div>
              </div>

              <h3 style={{marginTop: '1cm'}}>Newest on Devneo</h3>
              <div className="cardGrid">
                <div className="card dashCard">
                  <h3>Nice Balls</h3>
                  <p><b><span className="w3-tag">💻 CSS SNIPPET</span></b>{" "}<b><span className="w3-tag">👤 TIT</span></b>
                  </p>
                  <p>Shows you how to get nice balls</p>
                </div>

                <div className="card dashCard">
                  <h3>FormRocket</h3>
                  <p> <b><span className="w3-tag">💻 WEBSITE</span></b>{" "}<b><span className="w3-tag">👤 AR</span></b>
                  </p>
                  <p>Create forms with ease</p>
                </div>
              </div>

              <h3 style={{marginTop: '1cm'}}>Best Of This Week</h3>
              <div className="cardGrid">
                <div className="card dashCard">
                  <h3>Nice Balls</h3>
                  <p><b><span className="w3-tag">💻 CSS SNIPPET</span></b>{" "}<b><span className="w3-tag">👤 TIT</span></b>
                  </p>
                  <p>Shows you how to get nice balls</p>
                </div>

                <div className="card dashCard">
                  <h3>FormRocket</h3>
                  <p> <b><span className="w3-tag">💻 WEBSITE</span></b>{" "}<b><span className="w3-tag">👤 AR</span></b>
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


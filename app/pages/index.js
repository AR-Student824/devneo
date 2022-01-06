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
          
  <div>
    <header aria-labelledby="parcel" className="pt-20 md:pt-16 pb-8 md:pb-16 relative">
      <div className="absolute top-0 left-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-red-500 dark:from-blue-700 dark:via-purple-800 dark:to-red-800 transform -skew-y-6 -translate-y-28" style={{zIndex: "-1", width: "100%", height: "120%"}} role="presentation"></div>
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 box-border">
        <div className="flex flex-col lg:flex-row px-safe">
          <div className="lg:mr-12">
            <div className="flex flex-row items-center">
            
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white my-5 lg:my-10 leading-tight">
                The friendly space for {' '}
                <ul id="languageMarquee" className="inline-block align-top relative z-0 whitespace-nowrap">
                  <li><span className="text-pink-400">developers</span>.</li>
                </ul>
              </h2>
            </div>
            <p className="text-indigo-100 dark:text-purple-200 text-xl lg:text-2xl mb-8 lg:mb-16">
              A new way for developers to share and find everything from code snippets to projects, and even job listings.
            </p>
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
</div>

      

</div>

</header>
</div>

<div style={{margin: "4%", marginRight: "7%", marginLeft: "7%"}} className="pt-20 md:pt-16 pb-8 md:pb-16 relative">
  <div style={{float: "right"}}>
      <h3 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-white my-5 lg:my-10 leading-tight">
        Find code snippets with <span className="pink">ease</span>.
      </h3>
      <p>Share and find code snippets with ease, all in one place.</p>

      </div>
      <div style={{float: "left"}}>
        <Image src="/api-programming.png" width="500" height="300" />
      </div>
</div>


<div style={{margin: "4%", marginRight: "7%", marginLeft: "7%", clear:"both"}} className="pt-20 md:pt-16 pb-8 md:pb-16 relative">
  <div style={{float: "left"}}>
      <h3 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-white my-5 lg:my-10 leading-tight">
        <span className="pink">Share</span> projects effortlessly.
      </h3>
      <p>With Devneo, it&apos;s easy to share what you&apos;ve been working on, and growing your audience.</p>

      </div>
      <div style={{float: "right"}}>
        <Image src="/pencil-case.png" width="300" height="300" />
      </div>
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


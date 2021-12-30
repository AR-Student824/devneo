import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'

class SignIn extends Component {
  render(signInFunction) {
    return (
      <>
        <center>
          <Image src="/api-programming.png" width="400px" height="500px" alt="art"  />
            <h1 className={styles.title}>
               <span className="pink" id="typed">Sign In</span> with <span className="pink">GitHub</span>.
            </h1>

            <p className={styles.description}>
              Welcome to Devneo! To continue, please sign in.
            </p>

            <Button variant="contained" onClick={signInFunction} className={styles.disabledButton}>Continue With GitHub</Button>
            </center>
      </>
    )
  }
}

export default SignIn;
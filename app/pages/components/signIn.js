import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'

class SignIn extends Component {
  render(signInFunction) {
    return (
      <>
        <center>
            <h1 className={styles.title}>
               <span className="pink" id="typed">Login</span> with <span className="pink">GitHub</span>.
            </h1>

            <p className={styles.description}>
              Please login to continue with Devneo.
            </p>

            <Button variant="contained" onClick={signInFunction} className={styles.disabledButton}>Login</Button>
            </center>
      </>
    )
  }
}

export default SignIn;
import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'

class SignIn extends Component {
  render(signInFunction) {
    return (
      <>
        <center>
          <Image src="/login.png" width="300" height="300" alt="art"  />
            <h1 className={styles.title}>
               <span className="pink" id="typed">Sign In</span> with <span className="pink">GitHub</span>.
            </h1>

            <p className={styles.description}>
               By continuing, you agree to GitHub&apos;s Terms of Service.
            </p>

            <Button variant="contained" id="authBtn" onClick={this.props.signInFunction} className={styles.disabledButton}>Continue With GitHub &rarr;</Button>
            </center>
      </>
    )
  }
}

export default SignIn;
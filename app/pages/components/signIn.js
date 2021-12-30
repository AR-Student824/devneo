import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button'

class SignIn extends Component {
  render(signInFunction) {
    return (
      <>
        <center>
          <Image src="/login.png" width="400" height="400" alt="art"  />
            <h1 className={styles.title}>
               <span className="pink" id="typed">Sign In</span> with <span className="pink">GitHub</span>.
            </h1>

            <p className={styles.description}>
              Welcome to Devneo! To continue, please sign in.
            </p>

            <Button variant="contained" onClick={this.props.signInFunction} className={styles.disabledButton}>Continue With GitHub &rarr;</Button>
            </center>
      </>
    )
  }
}

export default SignIn;
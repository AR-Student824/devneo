import { Component } from 'react';
import Image from "next/image"
import styles from '.././styles/Home.module.css'

class Sidebar extends Component {
  render(signout, username, avatarUrl) {
    return (
        <>
            <div className="w3-sidebar w3-bar-block" style={{width:"25%"}}>
            <h3 className="w3-bar-item">Devneo</h3>
  <a href="#" className="w3-bar-item w3-button">🏠 Home</a>
  <a href="#" className="w3-bar-item w3-button">❤ Saved</a>
  <a onClick={this.props.signout} className="w3-bar-item w3-button">👋 Sign Out</a>

  <div className="placeBottom">
  <h3>Logged in as <Image src={this.props.username} alt="avatar" className={styles.avatar} width="25px" height="25px" /> {this.props.avatarUrl}</h3>
  </div>
</div>
        </>
    )
  }
}

export default Sidebar;
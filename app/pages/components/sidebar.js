import { Component } from 'react';
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

class Sidebar extends Component {
  render(signout, username, avatarUrl) {
    return (
      <>
        <div className="w3-sidebar w3-bar-block" style={{ width: "25%" }}>
          <h3 className="w3-bar-item">Devneo</h3>
          <a className="w3-bar-item w3-button"><Link href="https://www.devneo.wtf">🏠 Home</Link></a>
          <a className="w3-bar-item w3-button"><Link href="https://www.devneo.wtf/saved">❤ Saved</Link></a>
          <a onClick={this.props.signout} className="w3-bar-item w3-button">👋 Sign Out</a>

          <div className="placeBottom w3-bar-item">
            <h3><Image src={this.props.avatarUrl} alt="avatar" className={styles.avatar} width="25px" height="25px" /> {this.props.username}</h3>
          </div>
        </div>
      </>
    )
  }
}

export default Sidebar;
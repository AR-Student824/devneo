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
          <a href="https://www.devneo.wtf" className="w3-bar-item w3-button">🏠 Home</a>
          <a href="https://www.devneo.wtf/saved" className="w3-bar-item w3-button">💖 Saved</a>
          <a onClick={this.props.signout} className="w3-bar-item w3-button">👋 Sign Out</a>

          <div className="placeBottom w3-bar-item">
            <h3><Image src={this.props.avatarUrl} alt="avatar" className={styles.avatar} width="25px" height="25px" /> {this.props.username}</h3>
          </div>
        </div>

{/* Alternate navbar for mobile */}
        <div id="altbar">
        <div className="w3-bottom">
  <ul className="w3-bar w3-black">
    <center>
    <li><a href="https://www.devneo.wtf">🏠</a></li>
    <li><a href="https://www.devneo.wtf/saved">💖</a></li>
    <li><a onClick={this.props.signout}>👋</a></li>
    </center>
  </ul>
</div>
        </div>
      </>
    )
  }
}

export default Sidebar;
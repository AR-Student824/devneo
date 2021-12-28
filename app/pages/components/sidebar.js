import { Component } from 'react';

class Sidebar extends Component {
  render(signout) {
    return (
        <>
            <div className="w3-sidebar w3-bar-block" style={{width:"25%"}}>
            <h3 className="w3-bar-item">Devneo</h3>
  <a href="#" className="w3-bar-item w3-button">🏠 Home</a>
  <a href="#" className="w3-bar-item w3-button">❤ Saved</a>
  <a onClick={this.props.signout} className="w3-bar-item w3-button">👋 Sign Out</a>

  <div className="placeBottom">
  <h3>Logged in as <Image src={session.user.image} alt="avatar" className={styles.avatar} width="25px" height="25px" /> {session.user.name}</h3>
  </div>
</div>
        </>
    )
  }
}

export default Sidebar;
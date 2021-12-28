import { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <>
            <div className="w3-sidebar w3-bar-block" style={{width:"25%"}}>
            <h3 className="w3-bar-item">Devneo</h3>
  <a href="#" className="w3-bar-item w3-button">🏠 Home</a>
  <a href="#" className="w3-bar-item w3-button">❤ Saved</a>
  <a href="#" className="w3-bar-item w3-button"></a>
</div>
        </>
    )
  }
}

export default Sidebar;
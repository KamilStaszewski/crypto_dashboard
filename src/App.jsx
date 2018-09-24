import React from "react";
import "./custom.scss";
import { Context } from './Context'
import Userlist from './components/userlist'
import {slide as Menu} from 'react-burger-menu';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cryptolist: []
    }
  }
  
  componentDidMount = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?structure=array')
      .then(response => response.json())
      .then(json => this.setState({
        cryptolist: json.data
      }))
  }
  
  render() {
    console.log(this.state.cryptolist)
    return (
      <div>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <Context.Provider value={this.state}>
          <Userlist />
        </Context.Provider>
      </div>
    )
  }
}

export default App;

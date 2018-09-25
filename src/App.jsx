import React from "react";
import "./main.scss";
import { Context } from './Context';
import Userlist from './components/userlist';
import Menu from './components/menu';



class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cryptolist: []
    }
  }
  // bedzie lepsze https://exchangeratesapi.io/
  componentDidMount = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?structure=array')
      .then(response => response.json())
      .then(json => this.setState({
        cryptolist: json.data
      }))
  }
  
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          <Menu />
        </Context.Provider>
      </div>
    )
  }
}

export default App;

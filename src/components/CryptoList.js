import React, { Component } from 'react'

class CryptoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cryptodata: []
    }
  }
  
  componentDidMount = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10')
      .then(response => response.json())
      .then(cryptodata => this.setState({
        cryptodata
      }))
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default CryptoList

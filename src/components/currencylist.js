import React, { Component } from 'react';
import Currencyitem from './currencyitem';


export default class Currencylist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoading: true,
       currencyrates: [],
       canProps: false
    }
  }

  componentDidMount = () => {
    if (this.state.isLoading) {
      fetch('http://api.nbp.pl/api/exchangerates/tables/a/today/?format=json')
      .then((resp) => resp.json())
      .then((data) => this.setState({
        currencyrates: data,
        canProps: true
      }))
      .catch((error) =>{
        console.error(error);
    });
    }
  }

  componentWillUnmount = () => {
    this.setState({
      isLoading: false
    })
  }
  render() {
    let data = this.state.currencyrates.rates || {}
    return (
      <div className="currencylist">
        <Currencyitem todaysRates={this.state.currencyrates}
                      dataFetched={this.state.canProps}/>
      </div>
    )
  }
}


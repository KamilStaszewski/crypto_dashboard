import React, { Component } from 'react'

export default class Currencyitem extends Component {
  render() {
      let fetchedData = null;
      if (this.props.dataFetched) {
          fetchedData = this.props.todaysRates[0].rates
      }
      console.log(fetchedData)
    return (
      <div className="currencylist__itemscontainer">
      {this.props.dataFetched ? 
      fetchedData.map((el, index) => {
          return <div className="currencylist__item">{el.currency}</div>
      })
       : 
      <div>Data is loading...</div>}
      </div>
    )
  }
}

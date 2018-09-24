import React, { Component } from 'react'
import { Context } from '.././Context'



export default class Userlist extends Component {
  render() {
    return (
      <main>
        <Context.Consumer>
          {(context) => context.cryptolist.map(el => {
              return (
                  <div>
                      <h2>{el.name}</h2>
                      <h5>{el.symbol}</h5>
                      <h3>{el.quotes.USD.price}</h3>
                  </div>
              )
          })}
        </Context.Consumer>
      </main>
    )
  }
}


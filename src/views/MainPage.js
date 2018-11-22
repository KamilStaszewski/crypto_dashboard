import React, { Component } from 'react';
import Menu from '../components/menu';
import CryptoList from '../components/CryptoList';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Menu pageWrapId={ "MainPage" }/>
        <CryptoList />
      </div>
    )
  }
};

export default MainPage;
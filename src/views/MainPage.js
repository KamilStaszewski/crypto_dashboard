import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import UserList from '../components/UserList/UserList';

class MainPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isDataFetched: false
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({
        data,
        isDataFetched: true
      }))
  }
  

  render() {
    console.log(this.state.data)
    return (
      <div>
        <Menu />
        {/* <MobileMenu pageWrapId={ "MainPage" } /> */}
        <UserList data={this.state.data} isDataFetched={this.state.isDataFetched} />
      </div>
    )
  }
};

export default MainPage;
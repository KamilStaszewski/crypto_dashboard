import React, { Component } from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/dataActions';

class UserListContainer extends Component {
  componentDidMount = () => {
    this.props.fetchData();
  }
  
  render() {
    return (
      <UserList users={this.props.users} />
    );
  }
};

const mapStateToProps = state => ({
  users: state.dataReducer.users  
});

export default connect(mapStateToProps, { fetchData })(UserListContainer);




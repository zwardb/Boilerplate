import React from 'react';
import {connect} from 'react-redux';

// component
export const Home = props => {
  const {username} = props
  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  )
}

// conatiner
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home);

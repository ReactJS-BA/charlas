import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { Charlas } from 'view'
import { logout } from 'controller/user'

var Home = ({profile, actions}) =>{
  return <section className="main-content">
    <h2>Welcome {profile.nickname}</h2>
    <h3><a onClick={actions.logout}>Logout</a></h3>
    <Charlas />
  </section>
}
export default connect(
  state => ({ profile: state.user.profile}),
  {logout}
)(Home);

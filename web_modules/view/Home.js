import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { Charlas, InputText } from 'view'
import { logout } from 'controller/user'
import { list_spaces, add_space } from 'controller/space'
import { urls } from 'lib/userspace'

const Home = ({profile, spaces, waiting, actions, username, token}) =>
  <section className="main-content">
    <h2>Welcome {username}</h2>
    Items <InputText onClick={actions.add_space} text="agregar" enabled={!waiting}/>
    <ul>{spaces.map((item)=>
        <li key={item.id}>{item.value}</li>
    )}</ul>
    <h3><a onClick={actions.logout}>Logout</a></h3>
    <h3><a href={urls.dashboard(token)}>Dashboard</a></h3>
    <Charlas />
  </section>


const HomeClass = React.createClass({
  componentWillMount: function() {
    this.props.actions.list_spaces();
  },
  render: function() {
    return Home(this.props)
  }
})


export default connect(
  state => ({
      profile: state.user.profile,
      spaces: state.space.items,
      waiting: state.space.waiting,
      username: state.user.id,
      token : state.user.token.token
  }),
  {logout, list_spaces, add_space}
)(HomeClass);

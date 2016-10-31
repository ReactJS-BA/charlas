import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { load_repos, load_issues } from 'controller/github';

const Charlas = ({gh}) =>
  <div>
    <h3> Usuarios Registrados </h3>
    <ul>
       { gh.issues.map(e=>
         <li key={e.number}>
           <a> {e.title} </a>
         </li>
       )}
    </ul>
    <h3> Meetups Pasados </h3>
    <ul>
       { gh.repos.map(e=>
         <li key={e.name}>
           <a href={e.html_url}> {e.name} </a>
         </li>
       )}
    </ul>
  </div>

const CharlasClass = React.createClass({
  componentWillMount: function() {
    this.props.actions.load_repos();
    this.props.actions.load_issues();
  },
  render: function() {
    return Charlas(this.props)
  }
})

export default connect(
  state => ({ gh: state.github }),
  {load_repos, load_issues}
)(CharlasClass);

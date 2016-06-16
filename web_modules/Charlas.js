import React from 'react';
import ReactDOM from 'react-dom';


var Charlas = React.createClass({
  getInitialState: function() {
    return {
      talks : [],
      meetups : []
    }
  },
  componentDidMount: function() {
    this.props.github.getOrganization("ReactJS-BA").getRepos((error,repos,request) => {

      this.props.github.getIssues("ReactJS-BA", "charlas").listIssues({},(error,issues,request) => {
        this.setState({
          meetups : repos.filter(e=> {
            return e.name.match(/^meetup-.*/)
          } ),
          talks : issues
        })
      })
    });
  },
  render: function() {
    return (
      <div>
        <h3> Propuestas </h3>
        <ul>
         { this.state.talks.map(e=><li key={e.number}> <a> {e.title} </a></li> ) }
        </ul>
        <h3> Meetups Pasados </h3>
        <ul>
         { this.state.meetups.map(e=><li key={e.name}> <a href={e.html_url}> {e.name} </a></li> ) }
        </ul>
      </div>
    )
  }
});


export default Charlas;

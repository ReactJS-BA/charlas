import React from 'react';
import ReactDOM from 'react-dom';
import GitHub from 'github-api';
import Charlas from 'Charlas';

var LoggedIn = React.createClass({
  getInitialState: function() {
    return {
      profile: null
    }
  },

  componentDidMount: function() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      this.setState({
        profile: profile,
        github: new GitHub({
          //token: this.props.idToken
        })
      });
    }.bind(this));

  },
  render: function() {
    if (this.state.profile) {
      return (
        <section className="main-content">
          <h2>Welcome {this.state.profile.nickname}</h2>
          <h3><a onClick={this.props.logout}>Logout</a></h3>

          <Charlas github={this.state.github} />

        </section>
      );
    } else {
      return (
        <div className="loading">Loading profile</div>
      );
    }
  }
});

export default LoggedIn;

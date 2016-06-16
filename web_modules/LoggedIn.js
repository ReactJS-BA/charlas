import React from 'react';
import ReactDOM from 'react-dom';


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
      this.setState({profile: profile});
    }.bind(this));
  },
  render: function() {
    if (this.state.profile) {
      return (
        <section className="main-content">

          <h2 title={`with token ${this.props.idToken}`}>Welcome {this.state.profile.nickname}</h2>
          <h3><a onClick={this.props.logout}>Logout</a></h3>
          <h3><a id="support-or-contact" className="anchor" href="#support-or-contact" aria-hidden="true"><span aria-hidden="true" className="octicon octicon-link"></span></a>Support or Contact</h3>

          <p>Having trouble with Pages? Check out our <a href="https://help.github.com/pages">documentation</a> or <a href="https://github.com/contact">contact support</a> and we’ll help you sort it out.</p>

          <footer className="site-footer">
            <span className="site-footer-owner"><a href="https://github.com/ReactJS-BA/charlas">Charlas</a> is maintained by <a href="https://github.com/ReactJS-BA">ReactJS-BA</a>.</span>

            <span className="site-footer-credits">This page was generated by <a href="https://pages.github.com">GitHub Pages</a> using the <a href="https://github.com/jasonlong/cayman-theme">Cayman theme</a> by <a href="https://twitter.com/jasonlong">Jason Long</a>.</span>
          </footer>

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
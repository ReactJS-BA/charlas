import React from 'react';
import ReactDOM from 'react-dom';


var Home = React.createClass({
  showLock: function() {
    this.props.lock.show();
  },

  render: function() {
    return (
      <section className="main-content">
        <div className="login-box">
          <h2><a onClick={this.showLock}>Sign In</a></h2>
        </div>
      </section>);
  }
});

export default Home;

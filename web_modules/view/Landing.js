import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { Charlas } from 'view'
import { login } from 'controller/user'

var Landing = ({actions}) =>
      <section className="main-content">
        <div className="login-box">
          <h2><a onClick={actions.login}>Sign In</a></h2>
        </div>
      </section>

export default connect(
  undefined,
  {login}
)(Landing);

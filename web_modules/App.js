import React from 'react';
import ReactDOM from 'react-dom';
import AnonymousHome from 'Home';
import LoggedInHome from 'LoggedIn';

var App = React.createClass({
   componentWillMount: function() {
     this.lock = new Auth0Lock('kDM2xRJpjwa6aFfbM0TxChd5MsgKJ0n3', 'sebasjm.auth0.com');
     this.setState({idToken: this.getIdToken()})
   },

   getIdToken: function() {
     var idToken = localStorage.getItem('userToken');
     var authHash = this.lock.parseHash(window.location.hash);
     if (!idToken && authHash) {
       if (authHash.id_token) {
         idToken = authHash.id_token
         localStorage.setItem('userToken', authHash.id_token);
       }
       if (authHash.error) {
         console.log("Error signing in", authHash);
         return null;
       }
       window.location.hash = ""
     }
     return idToken;
   },
   logout: function() {
     localStorage.removeItem('userToken');
     this.setState({idToken: null})
   },
   render: function(){
     const content = this.state.idToken ?
       <LoggedInHome lock={this.lock} idToken={this.state.idToken} logout={this.logout}/> :
       <AnonymousHome lock={this.lock} />;

      return (
        <div>
          <section className="page-header">
            <h1 className="project-name">Charlas</h1>
            <h2 className="project-tagline">Propuestas y pedidos de charlas</h2>
          </section>
          {content}
        </div>
      )
   }
});

export default App

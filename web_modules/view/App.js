import React from 'react';
import ReactDOM from 'react-dom';

var App = ({children}) =>
    <div>
      <section className="page-header">
        <h1 className="project-name">Charlas</h1>
        <h2 className="project-tagline">Propuestas y pedidos de charlas</h2>
      </section>
      {children}
    </div>

export default App

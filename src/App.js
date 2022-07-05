import React, { Component } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Login from './components/authentication/login';
import MainLayout from './components/MainLayout.js';
import project from './components/Pages/project';
import './custom.css';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={MainLayout}/>
        <Route path='/project' component={project}/>
      </HashRouter>
    );
  }
}


export default App;
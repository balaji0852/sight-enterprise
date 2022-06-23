import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import MainLayout from './components/MainLayout';
import Home from './components/Pages/Home.js';
import Setting from './components/Pages/Setting.js';
import Example from './components/Pages/Workflow.js';
import classHome from './components/Pages/classHome.js';
import { HashRouter } from 'react-router-dom';
import Login from './components/authentication/login';
import './custom.css'

class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard'>
          <MainLayout>
            <Route path='/dashboard/home' component={Home} />
            <Route path='/dashboard/add' component={Example} />
            <Route path='/dashboard/classes' component={classHome} />
            <Route path='/dashboard/setting' component={Setting} />
          </MainLayout>
        </Route>
      </HashRouter>
    );
  }
}


export default App;
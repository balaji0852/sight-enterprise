import React,{Component}  from 'react';
import { Route } from 'react-router';
import  MainLayout  from './components/MainLayout';
import  Home  from './components/Pages/Home.js';
import Setting from './components/Pages/Setting.js';
import Example from './components/Pages/Workflow.js';

import './custom.css'

class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <MainLayout>
        <Route exact path='/Home' component={Home} />
        <Route path='/Classes' component={Setting} />
        <Route path='/add' component={Example} />
        <Route path='/Setting' component={Setting} />
      </MainLayout>
    );
  }
}


export default App;
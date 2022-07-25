import React, { Component } from 'react';
import './Home.css';
import loadingDescription from './save-organisation.jpg';
//import ClassItemComponent from '../Planner_graph/classItemcomponent';

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <div>
          <img className='loadingDescriptionImage'
            src={loadingDescription} />
          <h5 className='d'>Add you're task here, and collaborate efficiently along with you're team</h5>
        </div>
          
     
      </div>
    );
  }
}

export default Home;

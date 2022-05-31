import React, { Component } from 'react';
import './Home.css';
import ClassItemComponent from '../Planner_graph/classItemcomponent';

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <ClassItemComponent title="sight testing and fixes" description="Sight testing phase updates and fix will be updated here, please update for found bugs and communicate for it here..." lastComment='found bug on clicking home page, cant see the breadcrumb for the first time of boot' />
        <ClassItemComponent title="sight testing and fixes" description="Sight testing phase updates and fix will be updated here, please update for found bugs and communicate for it here..." lastComment='found bug on clicking home page, cant see the breadcrumb for the first time of boot' />
        <ClassItemComponent title="sight testing and fixes" description="Sight testing phase updates and fix will be updated here, please update for found bugs and communicate for it here..." lastComment='found bug on clicking home page, cant see the breadcrumb for the first time of boot' />
        <ClassItemComponent title="sight testing and fixes" description="Sight testing phase updates and fix will be updated here, please update for found bugs and communicate for it here..." lastComment='found bug on clicking home page, cant see the breadcrumb for the first time of boot' />
        <ClassItemComponent title="sight testing and fixes" description="Sight testing phase updates and fix will be updated here, please update for found bugs and communicate for it here..." lastComment='found bug on clicking home page, cant see the breadcrumb for the first time of boot' />

      </div>
    );
  }
}

export default Home;

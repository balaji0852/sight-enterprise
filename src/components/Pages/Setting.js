import React, { Component } from 'react';
import './Setting.css';

class Setting extends Component{


constructor(){
  super();
  this.state = {
     location:''
  }
}

componentDidMount(){

}

render() {

  return (
    <div className="setting">
      <h3>Settings</h3>
      <h5>Project id - pb1</h5>
    </div>
  );
}

}

export default Setting;
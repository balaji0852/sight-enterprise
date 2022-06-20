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
  console.log(window.location.hash);

  return (
    <div className="workflow">
      test
    </div>
  );
}

}

export default Setting;
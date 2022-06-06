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
    <h2>bye</h2>
    // <div className="workflow">
    //   {window.location.pathname}
    // </div>
  );
}

}

export default Setting;
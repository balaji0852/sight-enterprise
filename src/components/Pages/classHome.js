import React, { Component } from 'react';
import './classHome.css';

class classHome extends Component{


constructor(props){
  super(props);
  this.state = {
     location:''
  }
}

componentDidMount(){

}

render() {

  return (
    <div className="classHome">
      Classes
    </div>
  );
}

}

export default classHome;
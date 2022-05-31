import React,{Component}  from 'react';
 import "./class_item_component.css";
 import { BsThreeDotsVertical } from "react-icons/bs";

class classItemComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
           location:''
        }
      }
      
    render(){
        return (<div className="classItemComponent">
            <div className='topItems'> <h1>{this.props.title}</h1><BsThreeDotsVertical className='editIcon' size={30} /></div>
            <div className='description limitingText'>{this.props.description}</div>
            <div className='lastComment limitingText'>{this.props.lastComment}</div>
        </div>);
    }
}


export default classItemComponent;
import React, { Component } from 'react';
import './colorStore.css';


class ColorStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['Red', 'skyblue', 'yellowgreen','purple','green','Red', 'skyblue', 'yellowgreen','purple','green','Red', 'skyblue', 'yellowgreen','purple','green','Red', 'skyblue', 'yellowgreen','purple','green']
        }
    }

    changeSelectedColor(event){
        this.props.onSelected(event);
        console.log(event);
        //this.setState({selectedColors:'green'})
    }
    render() {
        return <div className='colorStore'>{}
            {this.state.colors.map((Element,Index) => {
                    return <div key={Index} className={this.props.selectedColor==Element?' colorItem selectedColorItem':'colorItem'}  onClick={this.changeSelectedColor.bind(this,Element)} style={{ backgroundColor: Element}}></div>;})
            }
        </div>;
    }
}


export default ColorStore;


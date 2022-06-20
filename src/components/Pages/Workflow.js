import React from 'react';
import { Button, FormGroup, Label, Input, Col } from 'reactstrap';
import './Workflow.css';
import ColorStore from '../Planner_graph/colorStore';

export default class Example extends React.Component {




  constructor(props) {
    super(props);
    this.onColorChange = this.onColorChange.bind(this);
    this.state = {
      selectedColor: 'red'
    };
  }

  onColorChange(value) {
    console.log("cc", value);
    this.setState({
      selectedColor: value
    });
  }

  render() {
    return <div className='classForm'>
      <h1>Add Class</h1>
      <FormGroup>
        <Input bsSize="lg" placeholder='classname' />
      </FormGroup>
      <FormGroup>
        <label>Select color</label>
        <ColorStore onSelected={this.onColorChange} selectedColor={this.state.selectedColor} />
      </FormGroup>
      <FormGroup row>
          <Label for="exampleSelect" sm={1}>Category</Label>
          <Col sm={4}>
            <Input type="select" name="select" id="exampleSelect" >
            {/* <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option> */}
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={1}>Sub-Category</Label>
          <Col sm={4}>
            <Input type="select" name="select" id="exampleSelect"  >
            {/* <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option> */}
          </Input>
          </Col>
        </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input  type="textarea" name="text" id="exampleText" sm={2}/>
      </FormGroup>
      <FormGroup>
        <Button>Add class</Button>
      </FormGroup>
    </div>;
  }
}
import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Title extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
        <div>
           <img className = "definition" src="./Images/Fernweh.png" onClick={this.props.onClick}/>
        </div>
    )
  }
}
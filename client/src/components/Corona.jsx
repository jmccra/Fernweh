import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Corona extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
        <div>
            <div className = "corona1">
           <img src= "./Images/DontYouKnow.png"/>
            </div>
            <div className = "corona1">
           <img src= "./Images/SelfIsolate.png"/>
           </div>
           <div className = "corona2">
           <img src= "./Images/StayHome.png"/>
           </div>
           <button className="button2" id="submit2" onClick={this.props.submit}>I'm just looking ></button>
        </div>
    )
  }
}
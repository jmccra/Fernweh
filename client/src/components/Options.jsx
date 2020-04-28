import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Options extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
        <div className = "options">
          <div className = 'text'>
            <img id="selectimages" src="./Images/SelectImages.png"/>
          </div>
          <div className = "row">

             <img className = "icon" id="beach" src= "./Images/Beach.jpg" onClick={()=>{
             this.props.onClick(['Beach', 'Nature', 'Water', 'Green'])
             document.getElementById('beach').style.opacity = 0.5;
            }}/>

             <img className = "icon" id="mountain" src= "./Images/Mountains.jpg" onClick={()=>{
             this.props.onClick(['Mountains', 'Green', 'Nature', 'National Park'])
             document.getElementById('mountain').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="newyork" src= "./Images/NewYork.jpg" onClick={()=>{
             this.props.onClick(['City','Man-made','Modern','America'])
             document.getElementById('newyork').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="pagoda" src= "./Images/pagoda.jpg" onClick={()=>{
             this.props.onClick(['Temple','Asia','Mountains'])
             document.getElementById('pagoda').style.opacity = 0.5;
             }}/>
        </div>

        <div className = "row">

             <img className = "icon" id="resort" src= "./Images/resort.jpg" onClick={()=>{
             this.props.onClick(['Beach', 'Nature', 'Resort', 'Water'])
             document.getElementById('resort').style.opacity = 0.5;
            }}/>

             <img className = "icon" id="garden" src= "./Images/garden.jpeg" onClick={()=>{
             this.props.onClick(['Garden','Green','Man-made'])
             document.getElementById('garden').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="rome" src= "./Images/rome.jpg" onClick={()=>{
             this.props.onClick(['Ancient','Man-made','Europe','Museum', 'Architecture'])
             document.getElementById('rome').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="museum" src= "./Images/museum.jpg" onClick={()=>{
             this.props.onClick(['Museum', 'City','Man-made','Historic'])
             document.getElementById('museum').style.opacity = 0.5;
             }}/>
        </div>

        <div className = "row">

             <img className = "icon" id="gothic" src= "./Images/gothic.jpg" onClick={()=>{
             this.props.onClick(['Historic','Man-made','Architecture','Europe', 'Religious'])
             document.getElementById('gothic').style.opacity = 0.5;
            }}/>

             <img className = "icon" id="bazaar" src= "./Images/bazaar.jpg" onClick={()=>{
             this.props.onClick(['Market', 'City', 'Man-made'])
             document.getElementById('bazaar').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="halong" src= "./Images/halong.jpg" onClick={()=>{
             this.props.onClick(['Asia','Beach','Mountains','Nature','Green','Water'])
             document.getElementById('halong').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="architecture" src= "./Images/architecture.jpg" onClick={()=>{
             this.props.onClick(['Architecture','City','Modern','Man-made'])
             document.getElementById('architecture').style.opacity = 0.5;
             }}/>
        </div>

        <div className = "row">

             <img className = "icon" id="maya" src= "./Images/maya.jpg" onClick={()=>{
             this.props.onClick(['South', 'Ancient', 'Green', 'Temple', 'Museum'])
             document.getElementById('maya').style.opacity = 0.5;
            }}/>

             <img className = "icon" id="colmar" src= "./Images/colmar.jpg" onClick={()=>{
             this.props.onClick(['Historic', 'Europe','City','Man-made'])
             document.getElementById('colmar').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="ski" src= "./Images/ski.jpg" onClick={()=>{
             this.props.onClick(['Resort','Man-made','Modern','Mountains'])
             document.getElementById('ski').style.opacity = 0.5;
             }}/>

             <img className = "icon" id="terrace" src= "./Images/terrace.jpg" onClick={()=>{
             this.props.onClick(['Asia', 'Mountains','National Park','Green','Garden'])
             document.getElementById('terrace').style.opacity = 0.5;
             }}/>
        </div>
        <button className="button" id="submit" onClick={this.props.submit}>></button>

        </div>
    )
  }
}
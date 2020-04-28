import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Modal extends Component{
    constructor(props){
        super(props);

        this.state={

        }
        this.Modal=this.Modal.bind(this)

    }

    Modal(){
      console.log('here')
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      span.onclick = function(){
          modal.style.display = "none";
      }
      window.onclick = function(event){
          if(event.target == modal){
              modal.style.display = "none"
          }
      }
  }


    render(){
        return(
          <div id="myModal" className="modal">
          <div className = "modal-content">
              <span className="close">X</span>
              <p>Modal text...</p>
          </div>
          </div>
    )
  }
}

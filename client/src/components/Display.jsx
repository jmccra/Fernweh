import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
const { places } = require('../../../db/models/places.js');

export default class Display extends Component{
    constructor(props){
        super(props);

        this.state={

        }
        this.Calculate=this.Calculate.bind(this)
        this.Modal=this.Modal.bind(this)
    }


    Modal(num){
            let identify = "myModal" + num;
            var modal = document.getElementById(identify);
            modal.style.display = "block";
            console.log('1', this)
            modal.onclick = function(){
                modal.style.display = "none";
            }
    }

    Calculate(){
        let selector = {};
        let tags = this.props.props;
        for(let i = 0; i < places.length; i++){
          for(let j = 0; j < tags.length; j++)
          if(places[i].tags.includes(tags[j])){
            if(!selector[places[i].name]){
              selector[places[i].name] = 1;
            } else{
              selector[places[i].name]++;
            }
          }
        }
      let keys = Object.keys(selector)
      let array = []
      for(let q = 0; q < keys.length; q++){
        let option = keys[q]
        let tuple = [option, selector[option]]
        array.push(tuple)
      }
      array.sort(function(a,b){
        return b[1] - a[1]
      })
      let top10 = array.slice(0,10);
      let ordered = [];
      for(let i = 0; i < top10.length; i++){
        ordered.push(top10[i][0])
      }
      let selections = [];
      for(let i = 0; i < places.length; i++){
          if(ordered.includes(places[i].name)){
              selections.push(places[i])
          }
      }
      return selections;
      }


    render(){
      if(this.props.props.length === 0){
        return(
            <>
            <div className = "noselection">You need to make some selections before your results can be calculated</div>
            <button className = "tryagain2" onClick={this.props.submit}>Try Again ></button>
            </>
        )
      } else{

        let selections = this.Calculate()

        return(
            <>
            <div id="myModal0" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[0].image}></img>
                <div className = "modaltext">{selections[0].name}</div>
                <div className = "modallocation">{selections[0].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[0].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal1" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[1].image}></img>
                <div className = "modaltext">{selections[1].name}</div>
                <div className = "modallocation">{selections[1].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[1].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal2" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[2].image}></img>
                <div className = "modaltext">{selections[2].name}</div>
                <div className = "modallocation">{selections[2].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[2].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal3" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[3].image}></img>
                <div className = "modaltext">{selections[3].name}</div>
                <div className = "modallocation">{selections[3].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[3].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal4" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[4].image}></img>
                <div className = "modaltext">{selections[4].name}</div>
                <div className = "modallocation">{selections[4].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[4].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal5" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[5].image}></img>
                <div className = "modaltext">{selections[5].name}</div>
                <div className = "modallocation">{selections[5].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[5].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal6" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[6].image}></img>
                <div className = "modaltext">{selections[6].name}</div>
                <div className = "modallocation">{selections[6].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[6].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal7" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[7].image}></img>
                <div className = "modaltext">{selections[7].name}</div>
                <div className = "modallocation">{selections[7].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[7].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal8" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[8].image}></img>
                <div className = "modaltext">{selections[8].name}</div>
                <div className = "modallocation">{selections[8].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[8].name)}}>Save to My List</div>
            </div>
            </div>
            <div id="myModal9" className="modal">
            <div className = "modal-content">
                <img className = "modalimage" src={selections[9].image}></img>
                <div className = "modaltext">{selections[9].name}</div>
                <div className = "modallocation">{selections[9].location}</div>
                <div className = "save" onClick={()=>{this.props.save(selections[9].name)}}>Save to My List</div>
            </div>
            </div>

        <div id="display">


            <div id = "topchoice">
                <img id = "topimage" onClick={()=>{this.Modal(0)}} src={selections[0].image}/>
                <div id = "topname">{selections[0].name}</div>
                <div id = "topplace">{selections[0].location}</div>
            </div>

            <div className = "others">Other Locations Based Off Your Preferences</div>
            <div className = "runneruprow">
                <div className = "runnerup">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(1)}} src={selections[1].image}/>
                    <div className = "runnerupname">{selections[1].name}</div>
                    <div className = "runnerupplace">{selections[1].location}</div>
                </div>
                <div className = "runnerup">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(2)}} src={selections[2].image}/>
                    <div className = "runnerupname">{selections[2].name}</div>
                    <div className = "runnerupplace">{selections[2].location}</div>
                </div>
                <div className = "runneruplast">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(3)}} src={selections[3].image}/>
                    <div className = "runnerupname">{selections[3].name}</div>
                    <div className = "runnerupplace">{selections[3].location}</div>
                </div>
            </div>

            <div className = "runneruprow">
                <div className = "runnerup">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(4)}} src={selections[4].image}/>
                    <div className = "runnerupname">{selections[4].name}</div>
                    <div className = "runnerupplace">{selections[4].location}</div>
                </div>
                <div className = "runnerup">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(5)}} src={selections[5].image}/>
                    <div className = "runnerupname">{selections[5].name}</div>
                    <div className = "runnerupplace">{selections[5].location}</div>
                </div>
                <div className = "runneruplast">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(6)}} src={selections[6].image}/>
                    <div className = "runnerupname">{selections[6].name}</div>
                    <div className = "runnerupplace">{selections[6].location}</div>
                </div>
            </div>

            <div className = "runneruprow">
                <div className = "runnerup">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(7)}} src={selections[7].image}/>
                    <div className = "runnerupname">{selections[7].name}</div>
                    <div className = "runnerupplace">{selections[7].location}</div>
                </div>
                <div className = "runnerup">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(8)}} src={selections[8].image}/>
                    <div className = "runnerupname">{selections[8].name}</div>
                    <div className = "runnerupplace">{selections[8].location}</div>
                </div>
                <div className = "runneruplast">
                    <img className = "runnerupimage" onClick={()=>{this.Modal(9)}} src={selections[9].image}/>
                    <div className = "runnerupname">{selections[9].name}</div>
                    <div className = "runnerupplace">{selections[9].location}</div>
                </div>
            </div>
            <button className = "tryagain" onClick={this.props.submit}>></button>
        </div>
        </>
        )
      }
  }
}
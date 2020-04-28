import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Options from './components/Options';
import Corona from './components/Corona';
import Display from './components/Display';

class Index extends Component{
  constructor(props){
    super(props);

    this.state={
      page: 'title',
      options: [],
      corona: false,
      list: []
    }

  this.renderNext = this.renderNext.bind(this)
  this.addTo = this.addTo.bind(this)
  this.save = this.save.bind(this)
  }

  renderNext(){
    if(this.state.page === 'title'){
      this.setState({page: 'options'})
    } else if(this.state.page === 'options'){
      if(this.state.corona === false){
        this.setState({page: 'corona', corona: true})
      } else{
        this.setState({page: 'display'})
      }
    } else if(this.state.page === 'corona'){
      this.setState({page: 'display'})
    } else if(this.state.page === 'display'){
      this.setState({page: 'options', options: []})
    }
  }

  addTo(types){
    let array = this.state.options;
    for(let i = 0; i < types.length; i++){
        array.push(types[i]);
    }
    this.setState({options: array}, ()=>{console.log(this.state)})
  }

  list(){
    var modal = document.getElementById('myList');
    modal.style.display = "block";
    modal.onclick = function(){
        modal.style.display = "none";
    }
  }

  save(location){
    let array = this.state.list;
    array.push(location)
    this.setState({list: array})
  }


render(){
    const listItems = this.state.list.map(function(place){
      return <li className = "listitem" id="place"> {place} </li>
    })
    return(
    <div>

      <div id="myList" className="modal">
            <div className = "modal-content">
              <div className = "mylisttitle">My Saved Locations</div>
                <ul className = "list">
                  {listItems}
                </ul>
            </div>
      </div>

      <img className = "title" src= "./Images/Fernweh_title.png"/>
      <div className = "mylist" onClick={this.list}>My List</div>
      {this.state.page==='title'? <Title onClick={this.renderNext}/> : ''}
      {this.state.page==='options'? <Options onClick={this.addTo} submit={this.renderNext}/> : ''}
      {this.state.page==='corona' ? <Corona submit={this.renderNext}/> : ''}
      {this.state.page==='calculate' ? <Calculate props={this.state.options} submit={this.renderNext}/> : ''}
      {this.state.page==='display' ? <Display props={this.state.options} submit={this.renderNext} save={this.save}/> : ''}
    </div>
)
}
}

ReactDOM.render(<Index />, document.getElementById('root'));

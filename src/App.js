
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  state = {
    compteur: 0,
    couleur1: false

  }

  render() {


    return (
      <div>
        <p className={this.state.couleur1  ? "red" : "" }>{this.state.compteur}</p>
        <button onClick={()=>this.setState({compteur :this.state.compteur +1})}>+1</button>
        <button onClick={()=>this.setState({compteur :this.state.compteur -1})}>-1</button>
        <button onClick={()=>this.setState({couleur1 : !this.state.couleur1})}>Rouge</button>
        
        
      </div>
    )
  }
}

export default App




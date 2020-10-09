import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName:'Johannas'
  }
  inputEventHandler = (event) => {
    this.setState({
      userName:event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput Change = {this.inputEventHandler} userName={this.state.userName}/>
        <UserOutput userName="Alex"/>
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;

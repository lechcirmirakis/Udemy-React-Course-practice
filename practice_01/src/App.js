import React, { Component } from 'react';
import './App.css';

import Userinput from './userInput/Userinput.js';
import Useroutput from './userOutput/Useroutput.js';
import Addnumber from './Numbers/Numbers.js';

import Menu from './Menu/Menu.js';

class App extends Component {
  state = {
    users: [
      {name: 'Wiktor', surname: 'Nowak'},
      {name: 'Bartosz', surname: 'Kowalski'},
      {name: 'Kamila', surname: 'Borowska'},
      {name: 'Karolina', surname: 'Zachęta'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        {name: 'Wiktor', surname: 'Nowak'},
        {name: 'Bartosz', surname: 'Kowalski'},
        {name: event.target.value, surname: 'Borowska'},
        {name: 'Karolina', surname: 'Zachęta'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <Userinput name={this.state.users[2].name } changed={this.nameChangeHandler}/>
        <Useroutput name={this.state.users[0].name} surname={this.state.users[0].surname}/>
        <Useroutput name={this.state.users[1].name} surname={this.state.users[1].surname}/>
        <Useroutput name={this.state.users[2].name} surname={this.state.users[2].surname}/>
        <Useroutput name={this.state.users[3].name} surname={this.state.users[3].surname}/>
        <Addnumber number1={12} number2 ={14}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Userinput from './userInput/Userinput.js';
import Useroutput from './userOutput/Useroutput.js';
import Addnumber from './Numbers/Numbers.js';
import Sum from './Sum/Sum.js';
import LikesBox from './Likes/Likes.js';

import Menu from './Menu/Menu.js';

class App extends Component {
  state = {
    users: [
      { name: 'Wiktor', surname: 'Nowak' },
      { name: 'Bartosz', surname: 'Kowalski' },
      { name: 'Kamila', surname: 'Borowska' },
      { name: 'Karolina', surname: 'Zachęta' }
    ],
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ],
    menuLinks: [
      {
        urL: '/',
        text: 'Strona główna'
      },
      {
        urL: '/blog',
        text: 'Blog'
      },
      {
        urL: '/pricing',
        text: 'Cennik'
      },
      {
        urL: '/galery',
        text: 'Galeria'
      },
      {
        urL: '/contact',
        text: 'Kontakt'
      },   
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        { name: 'Wiktor', surname: 'Nowak' },
        { name: 'Bartosz', surname: 'Kowalski' },
        { name: event.target.value, surname: 'Borowska' },
        { name: 'Karolina', surname: 'Zachęta' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Menu links={this.state.menuLinks} />
        <Userinput name={this.state.users[2].name} changed={this.nameChangeHandler} />
        <Useroutput name={this.state.users[0].name} surname={this.state.users[0].surname} />
        <Useroutput name={this.state.users[1].name} surname={this.state.users[1].surname} />
        <Useroutput name={this.state.users[2].name} surname={this.state.users[2].surname} />
        <Useroutput name={this.state.users[3].name} surname={this.state.users[3].surname} />
        <Addnumber number1={12} number2={14} />
        <Sum numbers={this.state.numbers} />
        <LikesBox likes={87} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputLength: 0
  }

  changeLength = (event) => {
    this.setState({
      inputLength: event.target.value.length
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={this.changeLength} />
          <p>{this.state.inputLength}</p>
        </div>
      </div>
    );
  }
}

export default App;

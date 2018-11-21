import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation.js';
import Chart from './Chart/Chart.js';

class App extends Component {
  state = {
    inpusValue: "",
    inputLength: 0
  }

  changeLength = (event) => {
    this.setState({
      inputLength: event.target.value.length,
      inpusValue: event.target.value
    });
  }

  deleteChartHandler = (index) => {
    const text = this.state.inpusValue.split("");
    text.splice(index, 1);
    const updeteText = text.join('');
    this.setState({
      inpusValue: updeteText,
      inputLength: updeteText.length
    });

  }

  render() {

    let charts = null;

    if (this.state.inputLength > 0) {
      let arrayToMap = this.state.inpusValue.split("");

      charts = (
        <div>
          {
            arrayToMap.map((el, index) => {
              return <Chart
                letter={el}
                key={index}
                clicked={() => this.deleteChartHandler(index)} />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <div>
          <input type="text"
            onChange={this.changeLength}
            value={this.state.inpusValue}
          />
          <p>{this.state.inputLength}</p>
          <Validation
            length={this.state.inputLength}
          />
        </div>
        {charts}
      </div>
    );
  }
}

export default App;

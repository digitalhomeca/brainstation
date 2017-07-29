import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor (props) {
    super();
    this.state = {
      time : 0,
      click : 0,
      generate : 0
    };
    this.tick = this.tick.bind(this);
    this.click = this.click.bind(this);
    this.random = this.random.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  

  tick() {
    this.setState({time: this.state.time + 1})
  }

  click() {
      this.setState({click: this.state.click + 1})
  }

  random() {
      this.setState({generate: Math.random()})
  }

  render() {

    return (

      <div className="App" onClick={this.click}>>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         <Timer time={this.state.time} /> 
         <Click clicks={this.state.click} /> 
         <Random clickFunction={this.random} generate={this.state.generate} />
        </p>

  
        
      </div>
    );
  }
}

class Random extends Component {
  render () {

    return (

      <div id="random">
        <h2> Generate a Random Number </h2>
        <button onClick={this.props.clickFunction}>Submit</button>
      <p> Random Number: <span> {this.props.generate} </span> </p>
      </div>
    );
  }
}

class Timer extends Component {
  render () {
    return (
      <div id="timer">
        <p id="timer-text"></p>
          <span id="timer-label"> Seconds past</span>
            <span id="timer-value"> {this.props.time}</span>  

      </div>

    );
  }
}

class Click extends Component {
  render () {
    return (
      <div id="clicks">
        <p id="clicks-text"></p>
          <span id="clicks-label">Total clicks:</span>
            <span id="clicks-value"> {this.props.clicks}</span>  

      </div>

    );
  }
}




export default App;

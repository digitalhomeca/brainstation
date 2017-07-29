import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  constructor () {
    super();
  }
  render() {

    return (
      <div className="App">
        <nav>
          <ul>    
            <li><Link to = "/home"> Home </Link></li>
            <li><Link to = "/about"> About </Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
    }
}

export default App;
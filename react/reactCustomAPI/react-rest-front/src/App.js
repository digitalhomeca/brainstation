import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

function Navigation (props) {
  return (
      <div>
          <nav >
          <ul className="nav nav-tabs">    
            <li><Link to = "/"> Home </Link></li>
            <li><Link to = "/about"> About </Link></li>
          </ul>
        </nav>
        
      </div>
);
}

export default App;




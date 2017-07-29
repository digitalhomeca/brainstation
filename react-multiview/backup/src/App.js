import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

function Header (props) {
  return (
      <div>
          <nav>
          <ul>    
            <li><Link to = "/"> Home </Link></li>
            <li><Link to = "/about"> About </Link></li>
          </ul>
        </nav>
      </div>
);
}

export default App;




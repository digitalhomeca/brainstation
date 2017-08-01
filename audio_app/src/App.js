import React, { Component } from 'react';
import SongsList from './components/SongsList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      songPlaying: ""
    }
  }

  render() {
    const songs = this.props.route.songs
    console.log(songs);

    return (
      <div className="App">
        <Header />
         {React.cloneElement(this.props.children, { findMeInConsole: 'You found me!'})}  
      </div>
    );
  }
}

function Header (props) {
  return (
      <div className="panel panel-primary">      
          <div className="panel-heading">
              <h1>Song List</h1>
          </div>  
      </div>
);
}

export default App;

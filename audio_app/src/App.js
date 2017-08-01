import React, { Component } from 'react';
import SongsList from './components/SongsList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      songSelected: "None"
    }
  }

  render() {
    const songs = this.props.route.songs
    // console.log(songs);

    return (
      <div className="App">
        <Header /> 
         <SongsList 
            songs={songs} />      
                {this.props.children}        
              {/* {React.cloneElement(this.props.children, { onClick: song here})}            */}
      </div>
    );
  }
}

function Header () {
  return (
      <div className="panel panel-primary">      
          <div className="panel-heading">
              <h1>Rock On!</h1>
          </div>  
      </div>
);
}

export default App;

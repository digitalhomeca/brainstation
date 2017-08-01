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
      let songList = songs.map((song,i) => {
        return (
                <SongsList  
                    key={i}
                    source={song.source}
                    title={song.title}
                    description={song.description}
                    id={song.id} />
       );
       })
    return (
      <div className="App">
        <h1>Song List</h1>
        {songList}
        {React.cloneElement(this.props.children, { findMeInConsole: 'You found me!'})}
      </div>
    );
  }
}



export default App;

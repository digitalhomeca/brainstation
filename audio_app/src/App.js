import React, { Component } from 'react';
import Header from './components/Header';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import Footer from './components/Footer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      selectedSong: 0,
      isPlaying: false

    }
    this.onSongPlay = this.onSongPlay.bind(this);
    this.onSongPause = this.onSongPause.bind(this);
    this.clickNext = this.clickNext.bind(this);
		this.clickPrev = this.clickPrev.bind(this);
  }

    onSongPlay () {
      let p = document.getElementById("controller");
      console.log(p);
      p.play();
    }

    onSongPause (event) {
      let p = document.getElementById("controller");
      p.pause();
    }

    clickNext() {
      console.log('clicknext');
      console.log(this.props.route.songs);
      console.log(this.state.selectedSong);

	   if (this.state.selectedSong < this.props.route.songs.length -1) {
			this.setState({selectedSong: this.state.selectedSong + 1});
	   } else {
		   this.setState({selectedSong: this.state.selectedSong});
	   }
  }
	
	clickPrev() {
    console.log('clickPrev');
		if (this.state.selectedSong > 0) {
		  this.setState({selectedSong: this.state.selectedSong - 1} );
		} else {
			this.setState({selectedSong: this.state.selectedSong, next: false});
		}
  }

  render() {
    const songs = this.props.route.songs
    console.log('songs length: ', songs.length);

    return (
      <div className="App">
        
        <Header /> 
          {React.cloneElement(this.props.children, {songs: songs})}               
         <Footer 
              songs={songs}
              selectedSong={this.state.selectedSong}
              isPlaying={this.state.isPlaying}
              onSongPlay={this.onSongPlay}
              onSongPause={this.onSongPause}
              clickNext={this.clickNext}
              clickPrev={this.clickPrev} /> 

      </div>
    );
  }
}

export default App;

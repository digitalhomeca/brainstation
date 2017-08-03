import React, { Component } from 'react';
import Header from './components/Header';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import Footer from './components/Footer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      isPlaying: false,
      selectedSong: 0,
    }
    this.songPick = this.songPick.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.onSongPlay = this.onSongPlay.bind(this);
    this.onSongPause = this.onSongPause.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }

    songPick(id) {
      console.log(id);
      this.setState({selectedSong: id }, console.log('setting songpick', id));
      this.onSongPlay();


    }
  	clickPrev() {
		if (this.state.selectedSong > 0) {
		  this.setState({selectedSong: this.state.selectedSong - 1} );
		  } else {
      this.setState({selectedSong: this.state.selectedSong, next: false});

		  }
    }
    onSongPlay () {
      this.setState({isPlaying: true}, console.log('setting onsong'));
      let p = document.getElementById("controller");
          p.play();
    }
    onSongPause (event) {
      this.setState({isPlaying: false});
      let p = document.getElementById("controller");
      p.pause();
    }
    clickNext(event) {
	   if (this.state.selectedSong < this.props.route.songs.length -1) {
			this.setState({selectedSong: this.state.selectedSong + 1});
	   } else {
       this.setState({selectedSong: this.state.selectedSong});

     }

  }

  render() {
    const songs = this.props.route.songs;

    return (
      <div className="App">
        
        <Header />
         {React.cloneElement(this.props.children, {songs: songs, songPick: this.songPick, songPlay: this.songPick})};   
         <Footer 
              songs={songs}
              selectedSong={this.state.selectedSong}
              isPlaying={this.state.isPlaying}
              onSongPlay={this.onSongPlay}
              onSongPause={this.onSongPause}
              clickNext={this.clickNext}
              clickPrev={this.clickPrev}  />

      </div>
    );
  }
}



export default App;

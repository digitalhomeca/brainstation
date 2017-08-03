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
    this.clickPrev = this.clickPrev.bind(this);
    this.onSongPlay = this.onSongPlay.bind(this);
    this.onSongPause = this.onSongPause.bind(this);
    this.clickNext = this.clickNext.bind(this);
  }
  	clickPrev() {
		if (this.state.selectedSong > 0) {
		  this.setState({selectedSong: this.state.selectedSong - 1} );
		  } else {
			this.setState({selectedSong: this.state.selectedSong, next: false});
		  }
    }
    onSongPlay (event) {
      // this.setState({songSelected: event.target.value})
      let p = document.getElementById("controller");
          p.play();
      this.setState({isPlaying: false})

    }
    onSongPause (event) {
      let p = document.getElementById("controller");
      p.pause();
    }
    clickNext(event) {
      // this.setState({songSelected: event.target.value})
      // console.log('clicknext this.props.route.songs', this.props.route.songs);
      // console.log('clicknext this.state.selectedSong', this.state.selectedSong); 
	   if (this.state.selectedSong < this.props.route.songs.length -1) {
			this.setState({selectedSong: this.state.selectedSong + 1});
	   } else {
		   this.setState({selectedSong: this.state.selectedSong});
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

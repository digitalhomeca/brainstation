import React, { Component } from 'react';
import Header from './components/Header';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import Footer from './components/Footer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      songSelected: "None"
    }
  }

  render() {
    const songs = this.props.route.songs
    console.log('app songs',songs);

    return (
      <div className="App">
        <Header /> 
        <SongsList 
            songs={songs} />         
        <SongDetails />                  
         {/* {React.cloneElement(this.props.children, 'hi'}               */}
         <Footer /> 
      </div>
    );
  }
}

export default App;

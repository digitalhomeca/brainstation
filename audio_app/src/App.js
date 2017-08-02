import React, { Component } from 'react';
import Header from './components/Header';
import SongsList from './components/SongsList';
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
    // console.log(songs);

    return (
      <div className="App">
        <Header /> 
         <SongsList 
            songs={songs} />      
                 {this.props.children}         
               {/* {React.cloneElement(this.props.children, { onClick: songhere})}             */}
        <Footer />
      </div>
    );
  }
}

export default App;

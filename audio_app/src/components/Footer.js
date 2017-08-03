import React, {Component} from 'react';

class Footer extends Component {

    componentDidMount() {
        let p = document.getElementById("controller");
        console.log(this.props.isPlaying);
        if (this.props.isPlaying === true) {p.play()}
        }
    
    render() {
        return (
        <div className="player" >

            <h4>{this.props.songs[this.props.selectedSong].title}</h4> 

           <audio  id='controller' src={this.props.songs[this.props.selectedSong].source} type="audio/mp3" /> 
           
           <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Go back a song!" disabled={this.props.selectedSong == 0} onClick={this.props.clickPrev}><span className="glyphicon glyphicon-step-backward glyphicon-align-left"></span></button>

           <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Play song!" onClick={this.props.onSongPlay}><span className="glyphicon glyphicon-play"></span></button> 

           <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Pause song!" onClick={this.props.onSongPause}><span className="glyphicon glyphicon-pause"></span></button>
           
          <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Skip Ahead" disabled={this.props.selectedSong == this.props.songs.length-1 } onClick={this.props.clickNext}><span className="glyphicon glyphicon-step-forward"></span></button>   
      </div>
        ); 
    }
}

export default Footer;

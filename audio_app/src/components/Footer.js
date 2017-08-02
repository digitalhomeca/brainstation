import React, {Component} from 'react';

class Footer extends Component {

    render() {

        return (
        <div className="player" >
              <audio  id='controller' src={this.props.songs[0].source} type="audio/mp3" /> 
           <button type="button" className="btn btn-default" onClick={this.props.clickPrev}><span className="glyphicon glyphicon-step-backward glyphicon-align-left"></span></button>

           <button type="button" className="btn btn-default" onClick={this.props.onSongPlay}><span className="glyphicon glyphicon-play"></span></button> 
          <button type="button" className="btn btn-default" onClick={this.props.onSongPause}><span className="glyphicon glyphicon-pause"></span></button>

          <button type="button" className="btn btn-default" onClick={this.props.clickNext}><span className="glyphicon glyphicon-step-forward"></span></button>   
      </div>
        ); 
    }
}
// {ev ent => { let p = document.getElementById("controller"); p.play();}}
export default Footer;

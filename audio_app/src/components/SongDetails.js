import React, {Component} from 'react';

class SongDetails extends Component {

    componentDidUpdate() {
        let p = document.getElementById("controller");
        if (this.props.isPlaying === true) {p.play()}
        }

    render() {
      let songID = this.props.params.id;
        return (
            <div>
                 <div className="panel">      
                    <div className="panel-heading">
                        <button type="button" className="btn btn-primary" onClick={()=>{this.props.songPick(this.props.params.id)}} >
                             <span className="glyphicon glyphicon-play glyphicon-align-left"></span>
                        </button> 
                        <h1>{this.props.songs[songID].title} </h1>
                        <p>{this.props.songs[songID].description} </p>

                    </div>  
                </div>


            </div>
        )
    }
}

export default SongDetails;
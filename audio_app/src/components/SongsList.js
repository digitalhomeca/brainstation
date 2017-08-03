import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
        let slist = this.props.songs.map((song, i) => {
        return (
                <Song  
                    key={i}
                    source={song.source}
                    title={song.title}
                    description={song.description}
                    id={song.id} 
                    songPick={this.props.songPick} />


       )
       })
       return (
             <div className="well"> 
                {slist}    
            </div>
       );
    
    }
}

class Song extends Component {
    render () {
        return (
                 <div className="media-body">
                    <h3 className="media-heading">

                        <Link to={`/songs/${this.props.id}`}> {this.props.title} </Link> 

                        <button type="button" className="btn btn-primary" value={this.props.id} onClick={()=> {this.props.songPick(this.props.id)}} >
                             <span className="glyphicon glyphicon-play glyphicon-align-left"></span>
                        </button> 

                    </h3>
                </div> 

        )
    }
}

export default SongsList;
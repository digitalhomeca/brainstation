import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
     console.log("1", this.props);
      console.log("2", this.props.songs);
        let slist = this.props.songs.map((song) => {
        return (
                <Song  
                    source={song.source}
                    title={song.title}
                    description={song.description}
                    id={song.id} />
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
            <div>
                <div className="media-body">
                    <h4 className="media-heading"><Link to={`/songs/${this.props.title}`}> {this.props.title} </Link> </h4>
                </div>
                   <div className="media-left media-middle">
                     <audio controls> 
                        <source src={this.props.source} type="audio/mpeg"/>
                    </audio> 
                </div>      
            </div>
        )
    }
}

export default SongsList;
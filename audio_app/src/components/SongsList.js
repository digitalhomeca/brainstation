import React, {Component} from 'react';

class SongsList extends Component {
    render() {
     console.log(this.props);

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
                    <h4 className="media-heading">{this.props.title}</h4>
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
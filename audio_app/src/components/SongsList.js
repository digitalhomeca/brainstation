import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
      console.log("SL this.props", this.props.songs);
      console.log("SL2 this.props.songs", this.props.songs);
        let slist = this.props.songs.map((song, i) => {
        return (
                <Song  
                    key={i}
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
                 <div className="media-body">
                    <h3 className="media-heading">
                        <Link to={`/songs/${this.props.id}`}> {this.props.title} </Link> 
                         <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-play glyphicon-align-left"></span></button>     
                         {/* onClick={event =>this.setState({songSelected:this.props.source})}    */}
                    </h3>
                </div> 

        )
    }
}

export default SongsList;
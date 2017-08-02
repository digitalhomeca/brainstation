import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
     console.log("SL this.props", this.props);
      console.log("SL this.props.songs", this.props.songs);
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
           <div>
            {/* <div className="container-fluid"> */}
             <div className="well"> 

                {slist}    
            </div>

            </div>
       );
    
    }
}

class Song extends Component {
    render () {
        return (

                // <div className="row">
                //     <span>
                //     <div className="col-lg-4"><Link to={`/songs/${this.props.id}`}> {this.props.title} </Link></div> 
                //     <div className="col-lg-8"><button className="btn btn-primary btn-small">Play</button></div>
                //     </span>
                // </div>


            <div>
                 <div className="media-body">
                    <h3 className="media-heading"><Link to={`/songs/${this.props.id}`}> {this.props.title} </Link> 
                    <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-play glyphicon-align-left"></span></button>
                        
                    </h3>
                </div> 
    
            </div>
        )
    }
}

export default SongsList;
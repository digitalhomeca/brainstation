import React, {Component} from 'react';

class SongDetails extends Component {
    componentWillMount () {
        
    }
    componentDidMount() {
        let p = document.getElementById("controller");
        console.log(this.props.isPlaying);
        if (this.props.isPlaying === true) {p.play()}
        }
    render() {
      let songID = this.props.params.id;
        return (
            <div>
                 <div className="panel">      
                    <div className="panel-heading">
                        <h1>{this.props.songs[songID].title} </h1>
                    </div>  
                </div>
                <p>{this.props.songs[songID].description} </p>

            </div>
        )
    }
}

export default SongDetails;
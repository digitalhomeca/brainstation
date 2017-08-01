import React, {Component} from 'react';

class SongDetails extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Song Title</h1>
                <p>Song Description</p>
                <audio controls>
                    <source src="song file" type="audio/mpeg"/>
                </audio>
            </div>
        )
    }
}

export default SongDetails;
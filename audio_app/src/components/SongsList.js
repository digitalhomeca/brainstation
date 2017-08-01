import React, {Component} from 'react';

class SongsList extends Component {
    render() {
     console.log(this.props)

       return (
 
            <div>
                <p>{this.props.title}</p>
                 <audio controls>
                    <source src={this.props.source} type="audio/ogg"/>
                </audio><br />

            </div>

       );
    
    }
}

export default SongsList;
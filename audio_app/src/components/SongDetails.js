import React, {Component} from 'react';

class SongDetails extends Component {
    render() {
        console.log('SD this.props',this.props)
        return (
            <div>
                 <div className="panel panel-primary">      
                    <div className="panel-heading">
                        <h1>Song Name</h1>
                    </div>  
                </div>
                <p>Song Description</p>

            </div>
        )
    }
}

export default SongDetails;
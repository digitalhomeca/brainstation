import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
      <div className="player">
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-step-backward glyphicon-align-left"></span></button>
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-fast-backward"></span></button>
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-backward"></span></button>      
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-play"></span></button>
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-pause"></span></button>
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-stop"></span></button>
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-forward"></span></button>       
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-fast-forward"></span></button>       
          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-step-forward"></span></button>

      </div>
        );
    }
}

export default Footer;
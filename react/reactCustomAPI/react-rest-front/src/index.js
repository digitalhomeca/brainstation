import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './About';
import Tasks from './Tasks'

import {Router,Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App} >  
        <IndexRoute component={Tasks} />
            <Route path="/about" component={About} />
    </Route>  
</Router>, document.getElementById('root'));

registerServiceWorker();

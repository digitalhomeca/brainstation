import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './Home';
import About from './About';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
                     <Route path="/" component={App} >  
                        <IndexRoute component={Home} />
                        <Route path="home" component={Home} />
                        <Route path="about" component={About} />
                     </Route>  
</Router>, document.getElementById('root'));

registerServiceWorker();
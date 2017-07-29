import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';


// const promise = axios.get('https://ian-beer-api.herokuapp.com/beers')

// promise.then((result) => {
//   console.log('success!');
//   console.log(result);
// } );

// promise.catch ((error) => {
//   console.log('ERROR :(');
//   console.log(error);
// });

// const promise = axios.post('https://ian-beer-api.herokuapp.com/beers', {name: "Raving Loonies", price: 5.50});

// promise.then((result) => {
//   console.log("success");
//   console.log(result.data);
// });

// promise.catch ((error) => {
//   console.log('ERROR XD');
//   console.log(error);
// });

const baseUrl = 'https://ian-beer-api.herokuapp.com/beers/';
const beerId= 'ca4771b6-cd40-ce6e-3761-4bf821fc24d4';

// const promise = axios.put( baseUrl + beerId, {name: "Raving Loonies Premium", price: 8.50});

// promise.then((result) => {
//   console.log("update success");
//   console.log(result.data);
// });

// promise.catch ((error) => {
//   console.log('ERROR XD');
//   console.log(error);
// });

// const promise = axios.get(baseUrl + beerId)

// promise.then((result) => {
//   console.log('success single beer!');
//   console.log(result);
// } );

// const deleteUrl ='1155635b-0b24-6eb8-1a26-0d8d625b8954'

// const promise = axios(baseUrl + deleteUrl)
// .then((result) => {
//      console.log("delete success");
//    console.log(result.data);
// });

// promise.catch ((error) => {
//   console.log('ERROR XD');
//   console.log(error);
// });





class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

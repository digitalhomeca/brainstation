import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateProfile from './CreateProfile.js';
import FriendList from './FriendList.js';
class App extends Component {
  constructor () {
    super();
    this.state = {
      profiles: [
        {name: "Lassie", age: 7, breed: "Collie", pureBred: true, profilePicture: "https://www.counter-currents.com/wp-content/uploads/2011/10/Lassie.jpg"},
        {name: "Honey", age: 13, breed: "Lab", pureBred: false, profilePicture: "http://www.yellow-lab.org/yellow-lab.jpg"}
      ]
    }
    this.addProfile = this.addProfile.bind(this);
    this.greeting = "Here are the top dogs!"
  }
  componentDidMount () {
    this.inputToFocus.focus();
  }
  addProfile (newProfile) {
    const newProfiles = this.state.profiles;
    newProfiles.push(newProfile)
    this.setState({
      profiles: newProfiles
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <CreateProfile registerFocusInput={el => this.inputToFocus = el} onCreateProfile={this.addProfile} />
              </div>
              <div className="col-sm-8">
                <FriendList profiles={this.state.profiles} greeting={this.greeting} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function Header () {
  return (<div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to DogBook</h2>
          </div>);
}
export default App;

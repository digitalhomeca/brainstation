import React, { Component } from 'react';
import PropTypes from 'prop-types';

const breeds = [
    '',
    'Collie',
    'Lab',
    'Sheepdog',
    'Chihuahua',
    'Other'
]

class CreateProfile extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            age: '',
            breed: '',
            pureBred: false,
            profilePicture: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.props.registerFocusInput(this.inputToFocus);
    }
    onNameChange (event) {
        this.setState({
            name: event.target.value
        });
    }
    onCheckBoxChange (event) {
        var updatedState = {};
        updatedState[event.target.name] = event.target.checked;
        this.setState(updatedState);
    }
    onValueChange (event) {
        var updatedState = {};
        updatedState[event.target.name] = event.target.value;
        this.setState(updatedState);
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
    }
    onSubmit (event) {
        event.preventDefault();
        if (this.state.name && this.state.age && this.state.breed) {
            this.props.onCreateProfile(this.state);
            this.setState({
                name: '',
                age: '',
                breed: '',
                pureBred: false,
                profilePicture: ''
            });
            this.inputToFocus.focus();
        }
    }
    render () {
        // debugger;
        return (<div className="row">
            <form onSubmit={this.onSubmit}>
                <label>Name</label>
                <input name="name" 
                        onChange={this.onValueChange} 
                        value={this.state.name}
                        ref={(input) => {this.inputToFocus = input;}}/>
                <br/>
                <label>Age (human years)</label>
                <input name="age" onChange={this.onValueChange} value={this.state.age}/>
                <br/>
                <label>Breed</label>
                <select name="breed" onChange={this.onValueChange} value={this.state.breed}>
                    { breeds.map((b, i) => { return <option key={i} value={b}>{b}</option>})}
                </select>
                <br/>
                <label>Pure Bred?</label>
                <input type="checkbox" name="pureBred" onChange={this.onCheckBoxChange} checked={this.state.pureBred}/>
                <br/>
                <label>Profile Picture (URL)</label>
                <input name="profilePicture" onChange={this.onValueChange} value={this.state.profilePicture} />
                <hr/>
                <input type="submit" value="submit" />
            </form>
        </div>);
    }
}
CreateProfile.propTypes = {
    onCreateProfile: PropTypes.func.isRequired
}

export default CreateProfile;
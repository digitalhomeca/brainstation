import React, { Component } from 'react';

class FriendList extends Component {
    componentWillMount() {
        console.log(JSON.stringify(this.props));
        // debugger;
    }
    render () {
        const profilesJSX = this.props.profiles.map((profile, i) => {
            return (<div key={i} className="profile">
                <h3>{profile.name}</h3>
                <img src={profile.profilePicture || "http://images.clipartpanda.com/free-dog-clipart-dog-8.jpg"} style={{maxWidth: '100px'}} alt="dog" />
                <p><span>Age: </span>{profile.age}</p>
                <p><span>Breed: </span>{profile.breed}</p>
                {profile.pureBred ? <p>Pure-Bred</p> : ''}
            </div>)
        })
        return (<div>
                    <h2>{this.props.greeting}</h2>
                    <div>
                    {profilesJSX}
                    </div>
                </div>);
    }
}

export default FriendList;

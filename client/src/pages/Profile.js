import React, { Component } from "react";
import Navbar from '../components/NavBar'
import ProfileTemplate from '../components/ProfileTemplate'

class Profile extends Component {
    state = {

    }
    componentDidMount() { }

    render() {
        return (
            <div>
                <Navbar />
                <ProfileTemplate />
            </div>
        )
    }
}

export default Profile;

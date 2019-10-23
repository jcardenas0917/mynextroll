import React, { Component } from "react";
import Navbar from '../components/NavBar'
import API from "../utils/API";
import ProfileTemplate from '../components/ProfileTemplate'

class Profile extends Component {
    state = {
        profile: {}
    }
    componentDidMount() {
        this.loadProfile();
    };
    loadProfile = () => {
        API.getProfiles()
            .then(res =>
                this.setState({ profile: res.data }),
                console.log(this.state.profile)
            )
            .catch(err => console.log(err));
    }
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

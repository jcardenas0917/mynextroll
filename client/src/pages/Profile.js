import React, { Component } from "react";
import API from "../utils/API";
import Navbar from '../components/NavBar'
import ProfileTemplate from '../components/ProfileTemplate'

class Profile extends Component {
    state = {
        name: "",
        email: "",
        userName: "",
        password: "",
        belt: "",
        stripes: 0,
        academy: "",
        city: "",
        profession: "",
        sub: "",
        instructor: "",
        image: ""
    }
    componentDidMount() {

    }
    handleInputChange = event => {

    }
    handleOnSubmit = () => {

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

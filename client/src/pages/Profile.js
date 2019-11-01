import React, { Component } from "react";
import API from "../utils/API";
import ProfileTemplate from '../components/ProfileTemplate'
import { Auth0Context } from "../react-auth0-spa";
import NavBar from "../components/NavBar";
import Title from "../components/Title";

class Profile extends Component {
  static contextType = Auth0Context;
  state = {
    profile: {}
  }
  componentDidMount() {
    this.loadProfile();
  };

  loadProfile = () => {
    const { user } = this.context;
    let email = user.email;
    API.getProfile(email)
      .then(res =>
        this.setState({ profile: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Title>Profile</Title>
        <ProfileTemplate
          name={this.state.profile.name}
          belt={this.state.profile.belt}
          stripes={this.state.profile.stripes}
          academy={this.state.profile.academy}
          city={this.state.profile.city}
          profession={this.state.profile.profession}
          sub={this.state.profile.sub}
          instructor={this.state.profile.instructor}
          image={this.state.profile.image} />
      </div>
    );
  }
}
export default Profile;

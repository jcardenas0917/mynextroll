import React, { Component } from "react";
import Background from '../components/Background';
import { Auth0Context } from "../react-auth0-spa";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph"

class Home extends Component {
  static contextType = Auth0Context;
  state = {
    profile: {},
  }
  async componentDidMount() {
    const { user } = this.context;
    // If logged into Auth0
    if (user) {
      // User Auth0 email to search your DB.  Load MyNextRoll profile
      await API.getProfile(user.email)
        .then(res =>
          this.setState({ profile: res.data }))
        .catch(err => console.log(err));

      // If MyNextRoll profile doesn't exist
      if (!this.state.profile) {

        this.props.history.push('/create');
      }

    }
  }
  render() {
    const { user } = this.context;
    console.log(user)
    return (
      <div>
        <NavBar />
        <Title>Welcome To My Next Roll!</Title>

        {!user && <Paragraph>Please sign up or login to start your Jiu Jitsu Journal<br />
          and be part of our awesome community!</Paragraph>}
        <Background />
      </div>
    )
  }
}
export default Home;

import React, { Component } from "react";
import API from "../utils/API";
import ProfileTemplate from '../components/ProfileTemplate'
import { useAuth0 } from '../react-auth0-spa';
import Loading from '../components/Loading'
import { runInThisContext } from "vm";
class Profile extends Component {
  state = {
    profile: {},
    token: ''
  }
  componentDidMount() {
    this.startPage();
    this.loadProfile();
    debugger;
  };
  startPage = () => {
    const { loading, user, token } = useAuth0();
    if (loading || !user || !token) {
      return <Loading />;
    }
    this.setState({ token: token })
  }
  loadProfile = () => {
    API.getProfiles(this.state.token)
      .then(res =>
        this.setState({ profile: res.data[0] }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
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

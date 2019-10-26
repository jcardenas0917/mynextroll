import React, { Component } from "react";
import API from "../utils/API";
import ProfileTemplate from '../components/ProfileTemplate'

class Profile extends Component {
  state = {
    profile: {}
  }
  componentDidMount() {
    this.loadProfile();
  };
  // startPage = () => {
  //   const { loading, user } = useAuth0();
  //   if (loading || !user) {
  //     return <Loading />;
  //   }
  // }
  loadProfile = () => {
    API.getProfiles()
      .then(res =>
        this.setState({ profile: res.data[0] }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ProfileTemplate
          name={this.state.profile.name}
          email={this.state.profile.email}
          username={this.state.profile.username}
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

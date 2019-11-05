import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn, Belts, Stripes } from '../components/CreateProfileForm'
import Title from '../components/Title';
import { Auth0Context } from "../react-auth0-spa";
import Paragraph from '../components/Paragraph';
import Cancel from "../components/CancelButton"

class EditProfile extends Component {
    static contextType = Auth0Context;
    state = {
        profile: {},
        formValid: false
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const { user } = this.context;
        let email = user.email;
        console.log(email)
        API.updateProfile(email, {
            name: this.state.name,
            belt: this.state.belt,
            stripes: this.state.stripes,
            academy: this.state.academy,
            city: this.state.city,
            profession: this.state.profession,
            sub: this.state.sub,
            instructor: this.state.instructor,
            image: this.state.image
        })
            .catch(err => console.log(err))
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div>
                <Title>Edit Your Profile</Title>
                <Paragraph>
                    Only Fill out the fields you would like to update
                    </Paragraph>
                <form>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <Jumbotron>
                                Name
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    placeholder={this.state.profile.name} />
                                Belt rank
                                <Belts
                                    value={this.state.belt}
                                    onChange={this.handleInputChange}
                                    name="belt"
                                    placeholder={this.state.profile.belt} />
                                Stripes
                                <Stripes
                                    value={this.state.stripes}
                                    onChange={this.handleInputChange}
                                    name="stripes"
                                    placeholder={this.state.profile.stripes} />
                                Academy
                                <Input
                                    value={this.state.academy}
                                    onChange={this.handleInputChange}
                                    name="academy"
                                    placeholder={this.state.profile.academy} />
                                City
                                <Input
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    name="city"
                                    placeholder={this.state.profile.city} />
                                Instructor
                                <Input
                                    value={this.state.instructor}
                                    onChange={this.handleInputChange}
                                    name="instructor"
                                    placeholder={this.state.profile.instructor} />
                                Favorite Submission
                                <Input
                                    value={this.state.sub}
                                    onChange={this.handleInputChange}
                                    name="sub"
                                    placeholder={this.state.profile.sub} />
                                Profession
                                <Input
                                    value={this.state.profession}
                                    onChange={this.handleInputChange}
                                    name="profession"
                                    placeholder={this.state.profile.profession} />
                                Image Link
                                <Input
                                    value={this.state.image}
                                    onChange={this.handleInputChange}
                                    name="image"
                                    placeholder={this.state.profile.image} />
                                <FormBtn
                                    onClick={this.handleFormSubmit} />
                                <Cancel />
                            </Jumbotron>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProfile;

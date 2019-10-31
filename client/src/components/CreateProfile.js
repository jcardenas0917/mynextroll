import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn, Belts, Email } from '../components/CreateProfileForm'
import Title from '../components/Title';
import RegBackground from '../components/RegBackground';
import { Auth0Context } from "../react-auth0-spa";

class CreateProfile extends Component {
    static contextType = Auth0Context;
    state = {
        name: "",
        email: "",
        belt: "",
        stripes: "",
        academy: "",
        city: "",
        profession: "",
        sub: "",
        instructor: "",
        image: ""
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
        API.saveProfile({
            email: email,
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
        const { user } = this.context;
        return (
            <div>
                <RegBackground>
                    <Title>Create Your Profile</Title>
                    <form>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <Jumbotron>
                                    Email
                                <Email
                                        value={user.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                    />
                                    Name
                                <Input
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        name="name"
                                        placeholder="Name (required)" />
                                    Belt rank
                                <Belts
                                        value={this.state.belt}
                                        onChange={this.handleInputChange}
                                        name="belt"
                                        placeholder="Type Belt Rank (required)" />
                                    Stripes
                                <Input
                                        value={this.state.stripes}
                                        onChange={this.handleInputChange}
                                        name="stripes"
                                        placeholder="Number of Stripes (required numbers only)" />
                                    Academy
                                <Input
                                        value={this.state.academy}
                                        onChange={this.handleInputChange}
                                        name="academy"
                                        placeholder="Name of Academy (required)" />
                                    City
                                <Input
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                        name="city"
                                        placeholder="Where do you train (required)" />
                                    Instructor
                                <Input
                                        value={this.state.instructor}
                                        onChange={this.handleInputChange}
                                        name="instructor"
                                        placeholder="Who is your instructor(required)" />
                                    Favorite Submission
                                <Input
                                        value={this.state.sub}
                                        onChange={this.handleInputChange}
                                        name="sub"
                                        placeholder="Favorite Submission (required)" />
                                    Profession
                                <Input
                                        value={this.state.profession}
                                        onChange={this.handleInputChange}
                                        name="profession"
                                        placeholder="What do you do (required)" />
                                    Image Link
                                <Input
                                        value={this.state.image}
                                        onChange={this.handleInputChange}
                                        name="image"
                                        placeholder="Copy and Paste Image link" />
                                    <FormBtn
                                        onClick={this.handleFormSubmit} />
                                </Jumbotron>
                            </div>
                        </div>
                    </form>
                </RegBackground>
            </div>
        )
    }
}

export default CreateProfile;

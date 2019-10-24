import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn, } from '../components/CreateProfileForm'
import Title from '../components/Title';
import RegBackground from '../components/RegBackground';

class CreateProfile extends Component {
    state = {
        name: "",
        email: "",
        userName: "",
        password: "",
        belt: "",
        stripes: "",
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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        API.saveProfile({
            name: this.state.name,
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password,
            belt: this.state.belt,
            stripes: this.state.stripes,
            academy: this.state.academy,
            city: this.state.city,
            profession: this.state.profession,
            sub: this.state.sub,
            instructor: this.state.instructor,
            image: this.state.image
        })
            .then(res => this.getProfile())
            .catch(err => console.log(err))
        this.setState({
            name: "",
            email: "",
            userName: "",
            password: "",
            belt: "",
            stripes: "",
            academy: "",
            city: "",
            profession: "",
            sub: "",
            instructor: "",
            image: ""
        });
    }

    render() {
        return (
            <div>
                <RegBackground>
                    <Title>Create Your Account and Profile</Title>
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
                                        placeholder="Name (required)" />
                                    E-Mail
                                <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        type="email"
                                        placeholder="Enter your e-mail (required)" />
                                    Username
                                <Input
                                        value={this.state.userName}
                                        onChange={this.handleInputChange}
                                        name="userName"
                                        placeholder="Create a Username (required)" />
                                    Password
                                <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        type="password"
                                        placeholder="Create a Password (required)" />
                                    Belt rank
                                <Input
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

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, Select, FormBtn, } from '../components/CreateProfileForm'

class CreateProfile extends Component {
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
    componentDidMount() { }

    componentDidMount() {

    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleOnSubmit = () => {

    }

    render() {
        return (
            <div>
                <from>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <Jumbotron>
                                Create your Account and Profile <br />
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
                                    placeholder="Create a Password (required)" />
                                Belt rank
                                <Input
                                    value={this.state.belt}
                                    onChange={this.handleInputChange}
                                    name="belt"
                                    placeholder="What's your current Belt (required)" />
                                Stripes
                                <Select
                                    value={this.state.stripes}
                                    onChange={this.handleInputChange}
                                    name="stripes"
                                />
                            </Jumbotron>


                        </div>
                        <div className="col-4">
                            <Jumbotron>
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
                                    name="submission"
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
                </from>
            </div>
        )
    }
}

export default CreateProfile;

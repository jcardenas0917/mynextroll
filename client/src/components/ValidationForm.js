import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import { Input, FormBtn, Belts, Email, Stripes } from './CreateProfileForm'
import Title from './Title';
import RegBackground from './RegBackground';
import { Auth0Context } from "../react-auth0-spa";

const initialState = {
    name: "",
    email: "",
    belt: "",
    stripes: "",
    academy: "",
    city: "",
    profession: "",
    sub: "",
    instructor: "",
    image: "",
    nameError: "",
    beltError: "",
    stripesError: "",
    academyError: "",
    cityError: "",
    professionError: "",
    subError: "",
    instructorError: ""
}
class ValidationForm extends Component {
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
        image: "",
        nameError: "",
        beltError: "",
        stripesError: "",
        academyError: "",
        cityError: "",
        professionError: "",
        subError: "",
        instructorError: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    validate = () => {
        let nameError = "";
        let beltError = "";
        let stripesError = "";
        let academyError = "";
        let cityError = "";
        let professionError = "";
        let subError = "";
        let instructorError = "";

        if (!this.state.name) {
            nameError = "name cannot be empty";
        }
        if (!this.state.belt) {
            beltError = "select a belt";
        }
        if (!this.state.stripes) {
            stripesError = "select stripes";
        }
        if (!this.state.academy) {
            academyError = "academy cannot be empty";
        }
        if (!this.state.city) {
            cityError = "city cannot be empty";
        }
        if (!this.state.profession) {
            professionError = "profession cannot be empty";
        }
        if (!this.state.sub) {
            subError = "submission cannot be empty";
        }
        if (!this.state.instructor) {
            instructorError = "instructor cannot be empty";
        }
        if (nameError || beltError || stripesError || academyError || cityError || professionError || subError || instructorError) {
            this.setState({ nameError, beltError, stripesError, academyError, cityError, professionError, subError, instructorError });
            return false;
        }
        return true;
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.setState(initialState);
        }

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
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.nameError}</div>
                                    Belt rank
                                <Belts
                                        value={this.state.belt}
                                        onChange={this.handleInputChange}
                                        name="belt"
                                        placeholder="Type Belt Rank (required)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.beltError}</div>
                                    Stripes
                                <Stripes
                                        value={this.state.stripes}
                                        onChange={this.handleInputChange}
                                        name="stripes"
                                        placeholder="Number of Stripes (required numbers only)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.stripesError}</div>
                                    Academy
                                <Input
                                        value={this.state.academy}
                                        onChange={this.handleInputChange}
                                        name="academy"
                                        placeholder="Name of Academy (required)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.academyError}</div>
                                    City
                                <Input
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                        name="city"
                                        placeholder="Where do you train (required)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.cityError}</div>
                                    Instructor
                                <Input
                                        value={this.state.instructor}
                                        onChange={this.handleInputChange}
                                        name="instructor"
                                        placeholder="Who is your instructor(required)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.instructorError}</div>
                                    Favorite Submission
                                <Input
                                        value={this.state.sub}
                                        onChange={this.handleInputChange}
                                        name="sub"
                                        placeholder="Favorite Submission (required)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.subError}</div>
                                    Profession
                                <Input
                                        value={this.state.profession}
                                        onChange={this.handleInputChange}
                                        name="profession"
                                        placeholder="What do you do (required)" />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.professionError}</div>
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

export default ValidationForm;

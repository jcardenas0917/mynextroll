import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn, } from '../components/CreateProfileForm'
import Title from '../components/Title';
import RegBackground from '../components/RegBackground';

class Login extends Component {

    state = {
        username: '',
        password: ''

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <RegBackground>
                    <Title>Log into your account</Title>
                    <form>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <Jumbotron>
                                    Username
                            <Input
                                        value={this.state.userName}
                                        onChange={this.handleInputChange}
                                        name="userName"
                                        placeholder="Username" />
                                    Password
                            <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        type="password"
                                        placeholder="Password" />

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
export default Login
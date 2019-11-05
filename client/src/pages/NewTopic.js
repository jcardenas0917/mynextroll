import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import { ForumLink } from "../components/Link";
import { ForumTitle, ForumBody, FormBtn, Category } from '../components/ForumTemplate';


const initialState = {

    user: "",
    title: "",
    body: "",
    category: "",
    titleError: "",
    bodyError: "",
    categoryError: "",

}

class NewTopic extends Component {
    static contextType = Auth0Context;
    state = {
        user: "",
        title: "",
        body: "",
        category: "",
        titleError: "",
        bodyError: "",
        categoryError: "",
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    validate = () => {
        let titleError = "";
        let bodyError = "";
        let categoryError = "";

        if (!this.state.title) {
            titleError = "title cannot be empty";
        }
        if (!this.state.body) {
            bodyError = "body cannot be empty";
        }
        if (!this.state.category) {
            categoryError = "select a category";
        }
        if (titleError || bodyError || categoryError) {
            this.setState({ titleError, bodyError, categoryError });
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
        const { user } = this.context;
        let nickname = user.nickname
        API.savePost({
            user: nickname,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }).catch(err => console.log(err))
        this.setRedirect();
    }
    setRedirect = () => {
        alert("New Topic Added to Forum");
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.props.history.push('/community');
        }
    }
    render() {

        return (
            <div>
                <NavBar />
                <ForumLink />
                <form>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            Title
                            <ForumTitle
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.titleError}</div>
                            Message
                                <ForumBody
                                value={this.state.body}
                                onChange={this.handleInputChange}
                                name="body"
                                placeholder="Entry Message (required)" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.bodyError}</div>
                            Category
                                <Category
                                value={this.state.selection}
                                onChange={this.handleInputChange}
                                name="category" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.categoryError}</div>
                            <FormBtn
                                disabled={!(this.state.title && this.state.body)}
                                onClick={this.handleFormSubmit} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTopic;


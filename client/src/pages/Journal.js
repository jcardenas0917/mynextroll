import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import BlogLink from "../components/Link";
import { User, JournalTitle, JournalBody, FormBtn } from "../components/CMS";
import { Category } from "../components/Blog";

const initialState = {

    user: "",
    title: "",
    body: "",
    category: "",
    titleError: "",
    bodyError: "",
    categoryError: "",

}


class Journal extends Component {
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
        API.saveJournal({
            user: nickname,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }).catch(err => console.log(err))
        this.setRedirect();
    }
    setRedirect = () => {
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.props.history.push('/blog');
        }
    }
    render() {
        const { user } = this.context;
        return (
            <div>
                <NavBar />
                <Title>Journal</Title>
                <BlogLink />
                <form>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            User
                                <User
                                value={user.nickname}
                                onChange={this.handleInputChange}
                                name="user"
                            />
                            Title
                                <JournalTitle
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.titleError}</div>
                            Body
                                <JournalBody
                                value={this.state.body}
                                onChange={this.handleInputChange}
                                name="body"
                                placeholder="Journal Body (required)" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.bodyError}</div>
                            Category
                                <Category
                                value={this.state.selection}
                                onChange={this.handleInputChange}
                                name="category"
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.categoryError}</div>
                            <FormBtn
                                onClick={this.handleFormSubmit} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Journal;


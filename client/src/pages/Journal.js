import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import BlogLink from "../components/Link";
import { User, JournalTitle, JournalBody, Category, FormBtn } from "../components/CMS"
class Journal extends Component {
    static contextType = Auth0Context;
    state = {
        user: "",
        title: "",
        body: "",
        category: ""
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
        let nickname = user.nickname
        console.log(user)
        API.saveJournal({
            user: nickname,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }).catch(err => console.log(err))
        this.props.history.push('/blog');

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
                            Body
                                <JournalBody
                                value={this.state.body}
                                onChange={this.handleInputChange}
                                name="body"
                                placeholder="Journal Body (required)" />
                            Category
                                <Category
                                value={this.state.category}
                                onChange={this.handleInputChange}
                                name="category"
                            />

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


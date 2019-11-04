import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import Wrappper from "../components/Wrapper";
import { User, ForumTitle, ForumBody, FormBtn, ForumTemplate } from '../components/ForumTemplate';
import Search from "../components/Search/index";

class Community extends Component {
    static contextType = Auth0Context;
    state = {
        user: "",
        title: "",
        body: "",
        titleError: "",
        bodyError: "",
        categoryError: "",
        posts: [{}],
        search: ""
    }
    async componentDidMount() {
        const { user } = this.context;
        console.log(user.nickname)
        await API.getPosts()
            .then(res =>
                this.setState({
                    posts: res.data
                }),
            )
            .catch(err => console.log(err));
    }

    getPosts = () => {

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
        API.savePost({
            user: nickname,
            title: this.state.title,
            body: this.state.body,
        }).catch(err => console.log(err))
        window.location.reload();
    }
    render() {
        const { user } = this.context;
        return (
            <div>
                <NavBar />
                <Title>Community</Title>
                <Search
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Search" />

                <div className="row">
                    <div className="col-7">

                        {this.state.posts.map(post => (
                            <Wrappper>
                                <ForumTemplate
                                    post={post}
                                    key={post._id}
                                />
                            </Wrappper>
                        ))}

                    </div>

                    <div className="col-1">
                    </div>
                    <div className="col-4">

                        User
                            <User
                            value={user.nickname}
                            onChange={this.handleInputChange}
                            name="user"
                        />
                        Title
                            <ForumTitle
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title (required)" />
                        Message
            <ForumBody
                            value={this.state.body}
                            onChange={this.handleInputChange}
                            name="body"
                            placeholder="Entry Message (required)" />
                        <div className="row">
                            <div className="col-4">
                                <FormBtn
                                    disabled={!(this.state.title && this.state.body)}
                                    onClick={this.handleFormSubmit} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Community;

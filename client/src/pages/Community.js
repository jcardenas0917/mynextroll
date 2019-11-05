import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import Wrappper from "../components/Wrapper";
import { ForumTitle, ForumBody, FormBtn, ForumTemplate, Category } from '../components/ForumTemplate';
import Paragraph from "../components/Paragraph";

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
        fileteredPosts: [{}],
        search: "",
        isFiltered: false
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSearch = event => {
        this.setState({ fileteredPosts: this.state.posts.filter(filteredPost => filteredPost.category === event.target.value) })
        this.setState({ isFiltered: true });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const { user } = this.context;
        let nickname = user.nickname
        API.savePost({
            user: nickname,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }).catch(err => console.log(err))
        window.location.reload();
    }
    render() {
        return (
            <div>
                <NavBar />
                <Title>Community</Title>
                <div className="row">
                    <div className="col-4">
                        <Paragraph>Seach by catergory</Paragraph>
                        <Category
                            value={this.state.selection}
                            onChange={this.handleSearch}
                            name="results" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        {this.state.isFiltered &&
                            this.state.fileteredPosts.map(post => (
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
                        Category
                            <Category
                            value={this.state.category}
                            onChange={this.handleInputChange}
                            name="category" />
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

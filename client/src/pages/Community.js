import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import { ForumTemplate, Category, TextArea, ReplyBtn, Comments, ForumTitle, ForumBody, FormBtn, NewTopic } from '../components/ForumTemplate';
import Paragraph from "../components/Paragraph";
import { CancelBtn } from "../components/CMS"

const initialState = {

    user: "",
    title: "",
    body: "",
    category: "",
    titleError: "",
    bodyError: "",
    categoryError: "",


}

class Community extends Component {
    static contextType = Auth0Context;
    state = {
        user: "",
        body: "",
        title: "",
        category: "",
        titleError: "",
        bodyError: "",
        categoryError: "",
        posts: [{}],
        fileteredPosts: [{}],
        isFiltered: false,
        forumId: "",
        showForm: false,
        showComments: true,
        selected: "",
        newEntry: false,
        showNewEntryForm: false

    }

    async componentDidMount() {
        await this.getPosts();
        this.setState({ loaded: true })
    }

    getPosts = async () => {
        await API.getPosts()
            .then(res => (
                this.setState({
                    posts: res.data
                })),

            )
            .catch(err => console.log(err))
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
    clickComment = forumId => {
        this.setState({ showForm: true });
        this.setState({ showComments: true });
        let id = forumId
        this.setState({ forumId: id })
        window.scrollTo(0, 0)
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
        }).then(() => alert("New Topic Added to Forum"))
            .then(() => window.location.reload())
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }
    handleSearch = event => {
        this.setState({ selected: event.target.value, isFiltered: true })
    }
    handleReply = async event => {
        event.preventDefault();
        const { user } = this.context;
        let nickname = user.nickname
        this.setState({
            showForm: false,
            body: "",
            showComments: true,
            showNewEntryForm: false
        });
        let id = this.state.forumId
        await API.saveComment(id, {
            user: nickname,
            body: this.state.body,
        }).then(() => this.getPosts())

            .catch(err => console.log(err));
    }
    onCancel = () => {
        this.setState({ isFiltered: true });
    }
    showFrom = () => {
        this.setState({ showForm: false, showNewEntryForm: true, newEntry: true, isFiltered: false, title: "", body: "", category: "" });
    }
    onCancelReply = () => {
        this.setState({
            showForm: false
        });
    };

    render() {
        console.log(this.state.selected)
        return (
            <div>
                <NavBar />
                <Title>Community</Title>

                <NewTopic onClick={this.showFrom} />
                {this.state.showNewEntryForm &&
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
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-2">
                                        <CancelBtn
                                            onClick={this.onCancel} />
                                    </div>
                                    <div className="col-2">
                                        <FormBtn
                                            disabled={!(this.state.category && this.state.title && this.state.body)}
                                            onClick={this.handleFormSubmit} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>}
                {!this.state.showNewEntryForm &&
                    <div className="row">
                        <div className="col-4">
                            <Paragraph>Seach by catergory</Paragraph>
                            <Category
                                value={this.state.selection}
                                onChange={this.handleSearch}
                                name="results" />
                        </div>
                    </div>}
                {this.state.showForm &&
                    <div className="row">
                        <div className="col-6">
                            <TextArea
                                value={this.state.body}
                                onChange={this.handleInputChange}
                                name="body"
                                placeholder="Reply Body (required)" />

                            <ReplyBtn onClick={this.handleReply} />
                            <CancelBtn
                                onClick={this.onCancelReply} />
                        </div>
                    </div>}
                {this.state.isFiltered &&
                    this.state.posts.filter(filteredPost => filteredPost.category === this.state.selected).map((post, i) => (
                        <React.Fragment>
                            <ForumTemplate
                                post={post}
                                key={i}
                                clickComment={this.clickComment}
                            />
                            {this.state.showComments &&
                                post.comment.map((userComment, i) => (
                                    <Comments
                                        user={userComment.user}
                                        body={userComment.body}
                                        createdAt={userComment.createdAt}
                                        key={i}
                                    />
                                ))}
                        </React.Fragment>
                    ))}

            </div>
        )
    }
}

export default Community;

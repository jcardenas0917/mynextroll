import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import { ForumTemplate, Category, TextArea, ReplyBtn, Comments, ForumTitle, ForumBody, FormBtn, NewTopic, Selection, Cancel } from '../components/ForumTemplate';
import { CancelBtn } from "../components/CMS"
import ProfileTemplate from "../components/UserProfileTemplate"


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
        profile: {},
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
        showNewEntryForm: false,
        showModal: false,
        newEntryButton: true,
        showSortSelection: true
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
        let id = forumId
        this.setState({ forumId: id, showForm: true, newEntryButton: false, showComments: true, showSortSelection: false })
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
        this.setState({ selected: event.target.value, isFiltered: true, showModal: false })

    }
    handleReply = async event => {
        event.preventDefault();
        const { user } = this.context;
        let nickname = user.nickname
        this.setState({
            showForm: false,
            body: "",
            showComments: true,
            showNewEntryForm: false,
            newEntryButton: true,
            showSortSelection: true
        });
        let id = this.state.forumId
        await API.saveComment(id, {
            user: nickname,
            body: this.state.body,
        }).then(() => this.getPosts())

            .catch(err => console.log(err));
    }
    onCancel = () => {
        this.setState({ showNewEntryForm: false });
    }
    showFrom = () => {
        this.setState({ showForm: false, showNewEntryForm: true, isFiltered: false, title: "", body: "", category: "" });
    }
    onCancelReply = () => {
        this.setState({
            showForm: false,
            newEntryButton: true,
            showSortSelection: true
        });
    };
    openModal = async user => {
        this.setState({ showModal: true })
        console.log(user)
        await API.getProfileByNickName(user)
            .then(res =>
                this.setState({ profile: res.data }))
            .catch(err => console.log(err));
        window.scrollTo(10, 10)
    }
    closeProfile = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div>
                <NavBar />
                <Title>Community</Title>

                {this.state.showModal &&
                    <div>
                        <Cancel onClick={this.closeProfile} />
                        <ProfileTemplate name={this.state.profile.name}
                            belt={this.state.profile.belt}
                            stripes={this.state.profile.stripes}
                            academy={this.state.profile.academy}
                            city={this.state.profile.city}
                            profession={this.state.profile.profession}
                            sub={this.state.profile.sub}
                            instructor={this.state.profile.instructor}
                            image={this.state.profile.image} />

                    </div>}

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
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <CancelBtn
                                            onClick={this.onCancel} />
                                    </div>
                                    <div className="col-4">
                                        <FormBtn

                                            onClick={this.handleFormSubmit} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>}
                {!this.state.showNewEntryForm &&
                    <div className="row">
                        <div className="col-4">
                            {this.state.showSortSelection &&
                                <Selection
                                    value={this.state.selection}
                                    onChange={this.handleSearch}
                                    name="results" />}
                        </div>
                        {this.state.newEntryButton &&
                            <div className="col-4">
                                <NewTopic onClick={this.showFrom} />
                            </div>}
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
                                openModal={this.openModal}
                            />
                            {this.state.showComments &&
                                post.comment.map((userComment, i) => (
                                    <Comments
                                        user={userComment.user}
                                        body={userComment.body}
                                        createdAt={userComment.createdAt}
                                        key={i}
                                        openModal={this.openModal}
                                    />
                                ))}

                        </React.Fragment>
                    ))}
            </div>
        )
    }
}

export default Community;

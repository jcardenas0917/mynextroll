import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import { ForumTemplate, Category, TextArea, ReplyBtn, Comments } from '../components/ForumTemplate';
import Paragraph from "../components/Paragraph";
import { NewTopic } from "../components/Link";



class Community extends Component {

    static contextType = Auth0Context;

    state = {
        user: "",
        body: "",
        posts: [{}],
        fileteredPosts: [{}],
        isFiltered: false,
        forumId: "",
        showForm: false,
        showComments: true,
        selected: ""
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
    clickComment = forumId => {
        this.setState({ showForm: true });
        this.setState({ showComments: true });
        let id = forumId
        this.setState({ forumId: id })
        window.scrollTo(0, 0)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    }
    handleSearch = event => {
        this.setState({ selected: event.target.value })
        this.setState({ isFiltered: true });
    }
    handleReply = async event => {
        event.preventDefault();
        const { user } = this.context;
        let nickname = user.nickname
        this.setState({
            showForm: false,
            body: "",
            showComments: true,
        });
        let id = this.state.forumId
        await API.saveComment(id, {
            user: nickname,
            body: this.state.body,
        }).then(() => this.getPosts())

            .catch(err => console.log(err))

    }
    render() {
        console.log(this.state.selected)
        return (
            <div>
                <NavBar />
                <Title>Community</Title>
                <NewTopic />
                <div className="row">
                    <div className="col-4">
                        <Paragraph>Seach by catergory</Paragraph>
                        <Category
                            value={this.state.selection}
                            onChange={this.handleSearch}
                            name="results" />
                    </div>
                    <div className="col-2"></div>
                    {this.state.showForm &&
                        <div className="col-6">
                            <TextArea
                                value={this.state.body}
                                onChange={this.handleInputChange}
                                name="body"
                                placeholder="Reply Body (required)" />
                            <ReplyBtn onClick={this.handleReply} />
                        </div>}
                </div>
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

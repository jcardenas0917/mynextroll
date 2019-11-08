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
        loaded: false
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
                console.log("getPosts() has updated posts"),
                this.state.posts.map(fakePost => (console.log("post object = " + JSON.stringify(fakePost)))),
            )
            .catch(err => console.log(err));
    }
    clickComment = forumId => {
        this.setState({ showForm: true });
        this.setState({ showComments: true });
        let id = forumId
        this.setState({ forumId: id })
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
    handleReply = async event => {
        event.preventDefault();
        const { user } = this.context;
        let nickname = user.nickname
        this.setState({ showForm: false });
        let id = this.state.forumId
        await API.saveComment(id, {
            user: nickname,
            body: this.state.body,
        }).then(() => this.getPosts())
            .catch(err => console.log(err))
        console.log("handleReply() saveComments promise of getPosts() should have completed")
        this.setState({ body: "" });
        this.setState({ showComments: true })
        this.setState({ loaded: true })
    }
    render() {
        console.log("I am in render()");
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
                    this.state.fileteredPosts.map((post, index) => (
                        <React.Fragment>
                            <ForumTemplate
                                post={post}
                                key={index}
                                clickComment={this.clickComment}
                            />
                            {this.state.showComments &&
                                post.comment.map((userComment, index) => (
                                    <Comments
                                        user={userComment.user}
                                        body={userComment.body}
                                        createdAt={userComment.createdAt}
                                        key={index}
                                    />
                                ))}
                        </React.Fragment>
                    ))}

            </div>
        )
    }
}

export default Community;

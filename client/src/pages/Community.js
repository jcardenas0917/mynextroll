import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import { ForumTemplate, Category, Modal } from '../components/ForumTemplate';
import Paragraph from "../components/Paragraph";
import { NewTopic } from "../components/Link";


class Community extends Component {
    static contextType = Auth0Context;
    state = {
        posts: [{}],
        fileteredPosts: [{}],
        search: "",
        isFiltered: false,
        forumId: "",
        comments: [{}]
    }
    async componentDidMount() {

        await API.getPosts()
            .then(res =>
                this.setState({
                    posts: res.data
                }),
            )
            .catch(err => console.log(err));
    }

    clickComment(forumId) {
        console.log(forumId)

        // API.getComments(forumId)
        //     .then(res =>
        //         this.setState({ comments: res.data })
        //     )
        //     .catch(err => console.log(err))
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
    render() {
        return (
            <div>
                <NavBar />
                <Title>Community</Title>
                <Modal />
                <NewTopic />
                <div className="row">
                    <div className="col-4">
                        <Paragraph>Seach by catergory</Paragraph>
                        <Category
                            value={this.state.selection}
                            onChange={this.handleSearch}
                            name="results" />
                    </div>
                </div>
                {this.state.isFiltered &&
                    this.state.fileteredPosts.map((post, i) => (
                        <ForumTemplate
                            post={post}
                            key={i}
                            clickComment={this.clickComment}
                        />
                    ))}
            </div>
        )
    }
}

export default Community;

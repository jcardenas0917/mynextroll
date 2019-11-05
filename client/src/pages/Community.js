import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import { ForumTemplate, Category } from '../components/ForumTemplate';
import Paragraph from "../components/Paragraph";
import { NewTopic } from "../components/Link";


class Community extends Component {
    static contextType = Auth0Context;
    state = {
        posts: [{}],
        fileteredPosts: [{}],
        search: "",
        isFiltered: false,
        id: "",
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
        console.log(this.state.id)
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
                </div>
                {this.state.isFiltered &&
                    this.state.fileteredPosts.map(post => (
                        <ForumTemplate
                            post={post}
                            key={post._id}
                            clickComment={this.clickComment}
                        />
                    ))}
            </div>
        )
    }
}

export default Community;

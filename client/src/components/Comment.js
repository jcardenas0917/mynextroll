import React, { Component } from "react";

import { Auth0Context } from "../react-auth0-spa";

import { ForumTemplate } from '../components/ForumTemplate';

class Comment extends Component {
    static contextType = Auth0Context;
    state = {
        id: "",
        comments: [{}]
    }
    componentDidMount() {

    }
    clickComment(id) {
        console.log(id)
    }
    render() {
        return (
            <div>
                <ForumTemplate
                    clickComment={this.clickComment} />
            </div>
        )
    }
}

export default Comment;

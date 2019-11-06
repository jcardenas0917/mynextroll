import React, { Component } from "react";

import { Auth0Context } from "../react-auth0-spa";

import { ForumTemplate, Modal } from './ForumTemplate';

class Comments extends Component {
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
                <Modal />
            </div>
        )
    }
}

export default Comments;

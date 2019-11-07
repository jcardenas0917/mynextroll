import React, { Component } from "react";

import { Auth0Context } from "../react-auth0-spa";



class Comments extends Component {
    static contextType = Auth0Context;
    state = {
        id: "",
        comments: [{}]
    }
    componentDidMount() {

    }
    clickComment = forumId => {

        let id = forumId
        console.log(id)
        this.setState({ forumId: id })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Comments;

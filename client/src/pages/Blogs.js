import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Blog from "../components/Blog";

class Blogs extends Component {
    state = {

    }
    componentDidMount() { }

    render() {
        return (
            <div>
                <NavBar />
                <Title>Journal List</Title>
                <Blog />

            </div>
        )
    }
}

export default Blogs;


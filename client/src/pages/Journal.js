import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import CMS from "../components/CMS";

class Journal extends Component {
    state = {

    }
    componentDidMount() { }

    render() {
        return (
            <div>
                <NavBar />
                <Title>Journal</Title>
                <CMS />

            </div>
        )
    }
}

export default Journal;


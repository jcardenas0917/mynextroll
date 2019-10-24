import React, { Component } from "react";
import Navbar from '../components/NavBar';
import Background from '../components/Background';

class Home extends Component {
    state = {

    }
    componentDidMount() { }

    render() {
        return (
            <div>
                <Navbar />
                <Background />
            </div>
        )
    }
}

export default Home;

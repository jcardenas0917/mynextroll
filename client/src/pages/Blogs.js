import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Category, BlogResults } from "../components/Blog";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";


class Blogs extends Component {
    static contextType = Auth0Context;
    state = {
        journals: {}
    }
    async componentDidMount() {
        const { user } = this.context;
        let nickname = user.nickname;
        await API.getJournal(nickname)
            .then(res =>
                this.setState({ journal: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <NavBar />
                <Title>Journal List</Title>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Category />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">

                        {this.state.journals.map(journal => (
                            <BlogResults
                                title={journal.title}
                                key={journal.user}
                                body={journal.body}
                                category={journal.category}
                            />
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}

export default Blogs;


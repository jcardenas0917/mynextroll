import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Category, BlogResults } from "../components/Blog";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import moment from 'moment';


class Blogs extends Component {
    static contextType = Auth0Context;
    state = {
        journals: [{}],
        filtered: [{}]
    }
    async componentDidMount() {
        const { user } = this.context;
        await API.getJournals(user.nickname)
            .then(res =>
                this.setState({ journals: res.data }))
            .catch(err => console.log(err));
    }
    filterJournals = () => {
        let filteredJournals = this.state.journals
        // filteredJournals = filteredJournals.filter(journal => journal.category)
        console.log(filteredJournals)
        // this.setState({
        //   filterJournals
        // })
    }

    fixTime = (time) => {
        console.log(time)
        return moment(time).format('MMMM Do YYYY, h:mm:ss a')
    }
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
                        <button className="button" onClick={this.filterJournals()}>Click me</button>
                        {this.state.journals.map(journal => (
                            <BlogResults
                                key={journal.id}
                                user={journal.user}
                                title={journal.title}
                                body={journal.body}
                                category={journal.category}
                                createdAt={this.fixTime(journal.createdAt)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogs;


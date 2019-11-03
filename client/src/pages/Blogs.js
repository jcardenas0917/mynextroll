import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Category, BlogResults } from "../components/Blog";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";


class Blogs extends Component {
    static contextType = Auth0Context;
    state = {
        journals: [{}],
        filteredJournals: [{}]
    }
    async componentDidMount() {
        const { user } = this.context;
        await API.getJournals(user.nickname)
            .then(res =>
                this.setState({
                    journals: res.data
                }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ filteredJournals: this.state.journals.filter(filteredJournal => filteredJournal.category === event.target.value) })
    }

    render() {
        return (
            <div>
                <NavBar />
                <Title>Journal List</Title>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Category
                            value={this.state.selection}
                            onChange={this.handleInputChange}
                            name="category"
                        />

                        {this.state.filteredJournals[0].createdAt &&
                            this.state.filteredJournals.map(filteredJournal => (

                                <BlogResults
                                    filter={filteredJournal}
                                    key={filteredJournal.id}
                                />

                            ))}

                    </div>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">


                    </div>
                </div>
            </div>
        )
    }
}


export default Blogs;


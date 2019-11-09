import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Category, BlogResults, JournalLink } from "../components/Blog";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Wrappper from "../components/Wrapper";

class Blogs extends Component {
    static contextType = Auth0Context;
    state = {
        journals: [{}],
        filteredJournals: [{}],
        isFiltered: false,
        selected: ""
    }
    async componentDidMount() {
        const { user } = this.context;
        console.log(user.nickname)
        await API.getJournal(user.nickname)
            .then(res =>
                this.setState({
                    journals: res.data
                }),
            )
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        this.setState({ selected: event.target.value })
        this.setState({ isFiltered: true });
    }
    deleteEntry = id => {
        API.deleteJournal(id)
            .then(res => this.confirm()
            ).then(() => this.componentDidMount())
            .catch(err => console.log(err))
    };
    confirm = () => {
        alert("Journal Deleted")
    };
    render() {
        return (
            <div>
                <NavBar />
                <Title>Journal List</Title>
                <JournalLink />
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Category
                            value={this.state.selection}
                            onChange={this.handleInputChange}
                            name="category"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">

                        {this.state.isFiltered &&
                            this.state.journals.filter(filteredJournal => filteredJournal.category === this.state.selected).map((filteredJournal, i) => (
                                <Wrappper>
                                    <BlogResults
                                        filter={filteredJournal}
                                        key={i}
                                    />
                                    <DeleteBtn onClick={() => this.deleteEntry(filteredJournal._id)} />
                                </Wrappper>
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default Blogs;


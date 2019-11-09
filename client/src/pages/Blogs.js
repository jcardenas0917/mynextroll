import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Category, BlogResults, JournalLink } from "../components/Blog";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";
import Wrappper from "../components/Wrapper";
import { JournalTitle, JournalBody, FormBtn, CancelBtn } from "../components/CMS";


class Blogs extends Component {
    static contextType = Auth0Context;
    state = {
        journals: [{}],
        isFiltered: false,
        selected: "",
        showForm: false,
        journalId: "",
        singleJournal: {}
    }
    async componentDidMount() {
        const { user } = this.context;
        API.getJournal(user.nickname)
            .then(res =>
                this.setState({
                    journals: res.data
                }),
            )
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleOnSearch = event => {
        this.setState({ selected: event.target.value, isFiltered: true });
    }
    deleteEntry = id => {
        API.deleteJournal(id)
            .then(() => alert("Journal Deleted")
            ).then(() => this.componentDidMount())
            .catch(err => console.log(err))
    };
    editEntry = () => {
        const { user } = this.context;
        let nickname = user.nickname;
        let id = this.state.journalId;
        API.updateJournal(id, {
            user: nickname,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        })
    }
    onCancel = () => {
        this.setState({ showForm: false });
    }
    showEditFrom = (id) => {
        this.setState({ showForm: true, journalId: id });
        API.getJournalById(id)
            .then(res => this.setState({ singleJournal: res.data }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <NavBar />
                <Title>Journal List</Title>
                <JournalLink />
                {this.state.showForm &&
                    <form>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                Title
                                <JournalTitle
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder={this.state.singleJournal.title} />
                                Body
                                <JournalBody
                                    value={this.state.body}
                                    onChange={this.handleInputChange}
                                    name="body"
                                    placeholder={this.state.singleJournal.body} />
                                Category
                                <Category
                                    value={this.state.selection}
                                    onChange={this.handleInputChange}
                                    name="category"
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.categoryError}</div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-2">
                                        <CancelBtn
                                            onClick={this.onCancel} />
                                    </div>
                                    <div className="col-2">
                                        <FormBtn
                                            onClick={this.editEntry} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>}
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Category
                            value={this.state.selection}
                            onChange={this.handleOnSearch}
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
                                    <DeleteBtn onClick={() => this.deleteEntry(filteredJournal._id)} />Delete
                                    <EditBtn onClick={() => this.showEditFrom(filteredJournal._id)} />Edit
                                </Wrappper>
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default Blogs;


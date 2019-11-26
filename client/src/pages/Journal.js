import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Category, BlogResults, NewJournal, Selection } from "../components/Blog";
import { Auth0Context } from "../react-auth0-spa";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";
import Wrappper from "../components/Wrapper";
import { JournalTitle, JournalBody, FormBtn, CancelBtn } from "../components/CMS";

const initialState = {

    user: "",
    title: "",
    body: "",
    category: "",
    titleError: "",
    bodyError: "",
    categoryError: "",

}


class Blogs extends Component {
    static contextType = Auth0Context;
    state = {
        user: "",
        title: "",
        body: "",
        category: "",
        titleError: "",
        bodyError: "",
        categoryError: "",
        journals: [{}],
        isFiltered: false,
        selected: "",
        showForm: false,
        journalId: "",
        singleJournal: {},
        newEntry: false,
        hideNewEntry: true
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

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleOnSearch = event => {
        this.setState({ selected: event.target.value, isFiltered: true });
    }
    validate = () => {
        let titleError = "";
        let bodyError = "";
        let categoryError = "";

        if (!this.state.title) {
            titleError = "title cannot be empty";
        }
        if (!this.state.body) {
            bodyError = "body cannot be empty";
        }
        if (!this.state.category) {
            categoryError = "select a category";
        }
        if (titleError || bodyError || categoryError) {
            this.setState({ titleError, bodyError, categoryError });
            return false;
        }
        return true;
    }
    deleteEntry = id => {
        API.deleteJournal(id)
            .then(() => this.componentDidMount())
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
    handleFormSubmit = event => {
        event.preventDefault();
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.setState(initialState);
        }
        const { user } = this.context;
        let nickname = user.nickname
        API.saveJournal({
            user: nickname,
            title: this.state.title,
            body: this.state.body,
            category: this.state.category
        }).catch(err => console.log(err))
        window.location.reload();
    }
    onCancel = () => {
        this.setState({ showForm: false, hideNewEntry: true });
    }
    showFrom = () => {
        console.log("clicked")
        this.setState({ showForm: true, newEntry: true, isFiltered: false, title: "", body: "", category: "" });
    }

    getSingleJournal = (id) => {
        this.setState({ showForm: true, journalId: id, isFiltered: false, hideNewEntry: false });
        API.getJournalById(id)
            .then(res => this.setState({ singleJournal: res.data }))
            .then(() => this.setState({
                title: this.state.singleJournal.title,
                body: this.state.singleJournal.body,
                category: this.state.singleJournal.category,
            }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <NavBar />

                <Title>Journal</Title>
                <div className="row">
                    {this.state.hideNewEntry &&
                        <NewJournal onClick={this.showFrom} />}
                </div>
                {this.state.showForm &&
                    <form>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                Title
                                <JournalTitle
                                    value={this.state.title}
                                    onChange={this.handleOnChange}
                                    name="title" />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.titleError}</div>
                                Body
                                <JournalBody
                                    value={this.state.body}
                                    onChange={this.handleOnChange}
                                    name="body"
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.bodyError}</div>
                                Category
                                <Selection
                                    value={this.state.selection}
                                    onChange={this.handleOnChange}
                                    name="category"
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.categoryError}</div>
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-4">
                                        <CancelBtn
                                            onClick={this.onCancel} />
                                    </div>
                                    <div className="col-4">
                                        <FormBtn
                                            disabled={!(this.state.category && this.state.title && this.state.body)}
                                            onClick={this.state.newEntry ? this.handleFormSubmit : this.editEntry} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>}
                {!this.state.showForm &&
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Category
                                value={this.state.selection}
                                onChange={this.handleOnSearch}
                                name="category"
                            />
                        </div>
                    </div>}
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
                                    <EditBtn onClick={() => this.getSingleJournal(filteredJournal._id)} />Edit
                                </Wrappper>
                            ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default Blogs;


import React from "react";
import "./style.css";
import moment from 'moment';

export function Category(props) {
    return (
        <div className="form-group">
            <select className="form-control" defaultValue={'DEFAULT'} {...props}>
                <option value="DEFAULT" disabled>Select A Category</option>
                <option>Training</option>
                <option>Technique</option>
                <option>Personal</option>
            </select>
        </div>
    )
}

export function BlogResults(props) {
    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.filter.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.filter.category}  {moment(props.filter.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                <p className="card-text">{props.filter.body}</p>
            </div>
        </div>

    );
}

export function JournalLink(props) {
    return (
        <div>
            <a className="btn btn-light" href="/journal">New Entry</a>
        </div>

    )
}
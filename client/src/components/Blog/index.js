import React from "react";
import "./style.css";
import moment from 'moment';

export function Category(props) {
    return (
        <div className="form-group">
            <select className="form-control" defaultValue={'DEFAULT'} {...props}>
                <option value="DEFAULT" disabled>Sort By Category</option>
                <option>Training</option>
                <option>Technique</option>
                <option>Personal</option>
            </select>
        </div>
    )
}

export function Selection(props) {
    return (
        <div className="form-group">
            <select className="form-control" defaultValue={'DEFAULT'} {...props}>
                <option value="DEFAULT" disabled>Select a Category</option>
                <option>Training</option>
                <option>Technique</option>
                <option>Personal</option>
            </select>
        </div>
    )
}

export function BlogResults(props) {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {props.filter.title}
                            </button>
                        </h2>
                        <h6 className="card-subtitle mb-2 text-muted">{props.filter.category}  {moment(props.filter.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            {props.filter.body}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NewJournal(props) {
    return (
        <span className="edit-btn" {...props} role="button" tabIndex="0">
            <button className="btn btn-primary">New Entry</button>
        </span>

    )
}
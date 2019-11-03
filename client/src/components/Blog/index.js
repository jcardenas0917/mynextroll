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

        <div >
            {console.log("I have called BlogResults()")}
            <h2>{props.filter.title}</h2>
            <h5>{props.filter.category} {moment(props.filter.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
            <p>{props.filter.body}</p>
        </div>

    );
}


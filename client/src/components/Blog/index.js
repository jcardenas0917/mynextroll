import React from "react";
import "./style.css";

export function Category(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option>Select Category</option>
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
            <h2>{props.title}</h2>
            <h5>{props.category} {props.createdAt}</h5>
            <p>{props.body}</p>
        </div>

    );
}


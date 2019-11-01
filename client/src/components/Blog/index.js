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
        <div className="container">
            <p>List will show here</p>
        </div>
    );
}


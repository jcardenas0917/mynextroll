import React from "react";
import "./style.css";

export function User(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}
export function JournalTitle(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function JournalBody(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="10"{...props} />
        </div>
    )
}

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
export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary" id="submitJournal">Submit
            {props.children}
        </button>
    );
}
export function CancelBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary" id="cancelJournal">Cancel
            {props.children}
        </button>
    );
}



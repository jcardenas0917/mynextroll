import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}
export function Email(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}
export function Stripes(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option>Select Stripes</option>
                <option>Zero Stripes</option>
                <option>One Stripe</option>
                <option>Two Stripes</option>
                <option>Three Stripes</option>
                <option>Four Stripes</option>
            </select>
        </div>
    )
}
export function Belts(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option>Select a Belt</option>
                <option>White</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Purple</option>
                <option>Brown</option>
                <option>Black</option>
            </select>
        </div>
    )
}
export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-light">Submit
            {props.children}
        </button>
    );
}


import React from "react";
import "./style.css";
function Search(props) {
    return (
        <div className="form-group">
            <input className="form-control search" {...props} />
        </div>
    )
}

export default Search;
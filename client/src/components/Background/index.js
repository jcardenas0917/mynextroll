import React from "react";
import "./style.css";

export function Background({ children }) {
    return (
        <div
            className="jumbotron" id="background"
        >
            {children}
        </div>
    );
}

export default Background;

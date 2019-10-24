import React from "react";
import "./style.css";

export function RegBackground({ children }) {
    return (
        <div
            className="jumbotron" id="RegBackground"
        >
            {children}
        </div>
    );
}

export default RegBackground;
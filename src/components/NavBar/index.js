import React from "react";
import "./styles.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
            <a className="nav-link" href="/"><h2 className="roll">My Next Roll</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/journal">Journal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/community">Community</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

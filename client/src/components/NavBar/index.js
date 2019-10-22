import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
            <Link className="nav-link" to="/home"><h2 className="roll">My Next Roll</h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/journal">Journal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/community">Community</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
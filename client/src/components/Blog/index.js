import React from "react";
import "./style.css";


function Blog(props) {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="form-group">
                        <select className="custom-select" id="category">
                            <option selected value="">All Categories</option>
                            <option value="Personal">Training</option>
                            <option value="Product Review">Technique</option>
                            <option value="Political">Personal</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <a className="btn btn-light" href="/cms">New Post</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 blog-container">
                </div>
            </div>
        </div>
    );
}

export default Blog;

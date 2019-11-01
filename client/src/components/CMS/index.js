import React from "react";
import "./style.css";


function CMS(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <div className="col-sm-2 mt-4">
                        <a className="btn btn-light" href="/blog">View All</a>
                    </div>
                </div>
                <div className="col-md-5 offset-md-3">
                    <form id="cms">
                        <div className="form-group">
                            <label for="title">Title:</label>
                            <input type="text" className="form-control" id="title" />
                            <br />
                            <label for="body">Body:</label>
                            <textarea className="form-control" rows="10" id="body"></textarea>
                            <div className="form-group">
                                <label for="category">Select Category:</label>
                                <select className="custom-select" id="category">
                                    <option value="Personal">Personal</option>
                                    <option value="Product Review">Product Review</option>
                                    <option value="Political">Political</option>
                                </select>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-success submit btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CMS;

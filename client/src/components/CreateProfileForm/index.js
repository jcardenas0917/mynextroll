import React from "react";

import "./style.css";

function CreateProfileForm(props) {
    return (

        <div className="jumbotron">
            <h1 align="center">Register and Create Your Profile</h1>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" className="form-control" id="name" placeholder="Enter Your First Name"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Username</label>
                            <input type="username" className="form-control" id="username" placeholder="Set A Username"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Belt Rank</label>
                            <input type="text" className="form-control" id="belt" placeholder="Enter Your Belt Rank"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Academy</label>
                            <input type="academy" className="form-control" id="academy" placeholder="Training Academy"></input>
                        </div>
                        <div className="form-group">
                            <label for="Profession">Profession</label>
                            <input className="form-control" id="profession" placeholder="Profession when you are not rollig"></input>
                        </div>
                        <div className="form-group">
                            <label for="Profession">Head Instructor</label>
                            <input className="form-control" id="instructor" placeholder="Who do you train under?" ></input>
                        </div>
                    </form>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Set a Password"></input>
                        </div>
                        <div className="form-group">
                            <label for="stripes">Number of Stripes</label>
                            <select className="form-control" id="stripes">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">City</label>
                            <input type="text" className="form-control" id="City" placeholder="Where are you located"></input>
                        </div>
                        <div className="form-group">
                            <label for="Profession">Favorite Submission</label>
                            <input className="form-control" id="Submission"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Upload Profile Image</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                        </div>
                        <button type="button" className="btn btn-danger Submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default CreateProfileForm;

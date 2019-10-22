import React from "react";

import "./style.css";

function CreateProfileTemplate(props) {
    return (

        <div class="jumbotron">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-4">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" class="form-control" id="name" placeholder="Enter Your First Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Username</label>
                            <input type="username" class="form-control" id="username" placeholder="Set A Username"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Belt Rank</label>
                            <input type="text" class="form-control" id="belt" placeholder="Enter Your Belt Rank"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Academy</label>
                            <input type="academy" class="form-control" id="academy" placeholder="Training Academy"></input>
                        </div>
                        <div class="form-group">
                            <label for="Profession">Profession</label>
                            <input class="form-control" id="Profession"></input>
                        </div>
                    </form>
                </div>
                <div class="col-2"></div>
                <div class="col-4">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Set a Password"></input>
                        </div>
                        <div class="form-group">
                            <label for="stripes">Number of Stripes</label>
                            <select class="form-control" id="stripes">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">City</label>
                            <input type="text" class="form-control" id="City" placeholder="Where are you located"></input>
                        </div>
                        <div class="form-group">
                            <label for="Profession">Favorite Submission</label>
                            <input class="form-control" id="Submission"></input>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default CreateProfileTemplate;

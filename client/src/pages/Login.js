import React from "react";
import "../styles/login.css";
// Depending on the current path, this component sets the "active" classNameName on the appropriate navigation link item
function Login() {
    return (
        <div className="container">
            <div className="row main">
                <div className="main-login main-center">
                    <h5>Log in to your account.</h5>
                    <form className="" method="post" action="#">
                        <div className="form-group">
                            <label for="username" className="cols-sm-2 control-label">Username</label>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" name="username" id="username" placeholder="Enter your Username" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="password" className="cols-sm-2 control-label">Password</label>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <a href="/" target="_blank" rel="noopener noreferrer" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Log In</a>
                        </div>
                        <div className="form-group ">
                            <a href="/register"><p>Don't have an account yet? click here to register</p></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};
export default Login;
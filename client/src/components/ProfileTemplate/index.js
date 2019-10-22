import React from "react";
import "./style.css";

function ProfileTemplate(props) {
    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/38446645_2136437323065258_2053208488787574784_n.jpg?_nc_cat=111&_nc_oc=AQlXFfs4S2WvBaKeQTYngzAkQ_sL6Fbxvri_mjv-3Cm-KUzGqjWgw1kZiK2pGz3eJQQ&_nc_ht=scontent.ftpa1-1.fna&oh=06b53a72c6563315e860bfcbbb41cab6&oe=5E1E0CCB" alt="" />
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                      <input type="file" name="file" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5 className="name">
                                Jaime Cardenas
                          </h5>
                            <h6 className="beltRank">
                                Brown Belt
                          </h6>
                            <p className="proile-rating">Stripes : <span className="stripeCount">1</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">

                            <p>Favorite Submission</p>
                            <p>Chokes</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6 userName">
                                        <p>jcardenas17</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Academy Name</label>
                                    </div>
                                    <div className="col-md-6 academyName">
                                        <p>ATT Orlando</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 instructor">
                                        <label>Head Instructor</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Paul Rodriguez</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>City</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Orlando</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfileTemplate;

import React from "react";
import "./style.css";
import EditButton from '../EditButton';



function ProfileTemplate(props) {
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="profile-head">
                            <h5 className="name">
                                {props.name}
                            </h5>
                            <h6 className="beltRank">
                                {props.belt} belt
                            </h6>
                            <p className="proile-rating">Stripes : <span className="stripeCount">{props.stripes}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <EditButton />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">

                            <p>Favorite Submission</p>
                            <p>{props.sub}</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Academy Name</label>
                                    </div>
                                    <div className="col-md-6 academyName">
                                        <p>{props.academy}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 instructor">
                                        <label>Head Instructor</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.instructor}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>City</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.city}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{props.profession}</p>
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

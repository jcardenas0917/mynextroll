import React from "react";
import "./style.css";
import moment from 'moment';


export function User(props) {
  return (
    <div className="form-group">
      <input className="form-control user" {...props} />
    </div>
  )
}

export function ForumTitle(props) {
  return (
    <div className="form-group">
      <input className="form-control formTitle" {...props} />
    </div>
  )
}

export function ForumBody(props) {
  return (
    <div className="form-group">
      <textarea className="form-control formBody" rows="5"{...props} />
    </div>
  )
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Submit
          {props.children}
    </button>
  );
}

export function ForumTemplate(props) {
  return (
    <div className="card">
      <div className="card-body forum">
        <h5 className="card-title">{props.post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.post.user}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{moment(props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
        <p className="card-text">{props.post.body}</p>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-2">
            <i className="material-icons like">thumb_up</i>
          </div>
          <div className="col-2">
            <i className="material-icons comment">comment</i>
          </div>
        </div>
      </div>
    </div>
  );
}


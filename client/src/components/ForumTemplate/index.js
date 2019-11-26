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
export function Category(props) {
  return (
    <div className="form-group">
      <select className="form-control" defaultValue={'DEFAULT'} {...props}>
        <option value="DEFAULT" disabled>Select A Category</option>
        <option>Training</option>
        <option>Technique</option>
        <option>Questions</option>
        <option>Gear</option>
        <option>Discussion</option>
      </select>
    </div>
  )
}
export function Selection(props) {
  return (
    <div className="form-group">
      <select className="form-control" defaultValue={'DEFAULT'} {...props}>
        <option value="DEFAULT" disabled>Sort by Category</option>
        <option>Training</option>
        <option>Technique</option>
        <option>Questions</option>
        <option>Gear</option>
        <option>Discussion</option>
      </select>
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
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">Submit
          {props.children}
    </button>
  );
}
export function ReplyBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">Reply
          {props.children}
    </button>
  );
}

export function ForumTemplate(props) {
  return (
    <div>
      <div className="row">
        <div className="accordion post" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                {props.post.title}
              </h2>
              <div className="row">
                <div className="col-4">
                  {moment(props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </div>
                <div className="col-4">
                  <i className="material-icons comment" onClick={() => props.clickComment(props.post._id)}>comment </i>
                </div>
                <div className="col-2">
                  <h6 className="card-subtitle mb-2 text-muted"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => props.openModal(props.post.user)} > {props.post.user}</button></h6>
                </div>
                <div className="col-2">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Show Comments
                </button>
                </div>
              </div>
              <div className="row">
                {props.post.body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Comments(props) {
  return (
    <div className="container">
      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              {props.body}
            </div>
            <div className="col-2">
              {moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => props.openModal(props.user)} >{props.user}</button>
            </div>
            <div className="col-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5"{...props} />
    </div>
  )
}

export function NewTopic(props) {
  return (
    <span className="edit-btn" {...props} role="button" tabIndex="0">
      <button className="btn btn-primary">New Entry</button>
    </span>

  )
}

export function Cancel(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">Close
          {props.children}
    </button>
  );
}








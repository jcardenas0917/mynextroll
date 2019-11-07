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
      <table className="table table-striped">
        <tbody>
          <tr>
            <th scope="row"></th>
            <td><h4>{props.post.title}</h4><br />
              {props.post.body}
            </td>
            <td>{props.post.user}</td>
            <td>{props.post.category}</td>
            <td>{moment(props.post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td><i className="material-icons comment" onClick={() => props.clickComment(props.post._id)}>comment </i></td>
          </tr>
        </tbody>
      </table>
      <div className="comments"></div>
    </div>
  );
}
export function Comments(props) {
  return (
    <div>
      <ul>
        <li>
          {props.id}
        </li>
      </ul>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5"{...props} />
    </div>
  )
}
export function ShowCommentsBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">Show Comments
          {props.children}
    </button>
  );
}






import React from "react";
import "./style.css";
import moment from 'moment';
import API from "../../utils/API";



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
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Submit
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
            <td><i className="material-icons comment" onClick={() => props.clickComment(props.post._id)} data-toggle="modal" data-target="#exampleModal">comment </i></td>
          </tr>
        </tbody>
      </table>
      <div className="comments"></div>

    </div>


  );
}
let textInput = React.createRef();

const saveComment = (id) => {
  console.log(textInput.current.value)
  console.log("passed" + id)
  API.saveComment(id, {
    comment: textInput.current.value
  }).catch(err => console.log(err))
}

export const Modal = (props) => (

  <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add a comment</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <textarea rows="4" cols="50" id="commentBox" ref={textInput}>

          </textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={saveComment}>Add Comment</button>
        </div>
      </div>
    </div>
  </div>
);

export function TextArea(props) {
  return <textarea rows="4" cols="50" className="comment">{props.children}</textarea>;
}






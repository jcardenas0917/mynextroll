import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      <i className="material-icons">delete</i>
    </span>
  );
}

export default DeleteBtn;

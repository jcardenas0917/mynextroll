import React from "react";

function TextArea(props) {
    return <textarea rows="4" cols="50" className="comment">{props.children}</textarea>;
}

export default TextArea;

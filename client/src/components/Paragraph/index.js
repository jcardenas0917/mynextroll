import React from "react";
import "./style.css";

function Paragraph(props) {
  return <p className="message">{props.children}</p>;
}

export default Paragraph;

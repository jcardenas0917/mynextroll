import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="row">
      <div className="col-2">
        <img id="avengers" alt="logo" src="/spiderman.png" />
      </div>
      <div className="col-8">
        <div className="wrapper">{props.children}</div>
      </div>
      <div className="col-2">
        <img id="avengers" alt="logo" src="/ironman.png" />
      </div>
    </div>
  )
}

export default Wrapper;
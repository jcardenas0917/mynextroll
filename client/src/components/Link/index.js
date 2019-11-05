import React from "react";
import "./style.css";

export function BlogLink(props) {
  return (
    <div>
      <a className="btn btn-light" href="/blog">Go to Journal List</a>
    </div>

  )
}

export function ForumLink(props) {
  return (
    <div>
      <a className="btn btn-light" href="/community">Forum List</a>
    </div>

  )
}

export function NewTopic(props) {
  return (
    <div>
      <a className="btn btn-light" href="/newtopic">New Topic</a>
    </div>

  )
}



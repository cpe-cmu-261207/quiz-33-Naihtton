import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
          <img
            src={props.a.userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {props.a.username}
            </span>
            <br />
            <span>{props.a.commentText}</span>
            <span style={{ color: "#E4E6EB" }}>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{props.a.likeNum} คน</span>
            </div>
          </div>
        </div>

      {/*render Reply here... */}
      {props.a.replies.map((element,id) => (
        <Reply a = {element} key = {id}/>
      ))}
    
    </div>
  );
}

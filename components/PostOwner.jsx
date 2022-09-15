import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/Thian.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">
              Thian Suwannakul 620610176
            </span>
          </div>
          <span className="text-white">
            ฝนตกให้ใส่เสื้อกันฝน แต่ถ้าสอบตกต้องใส่เสื้ออะไร
          </span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>1M คน</span>
          </div>
          <hr className="m-0 border" />
          {props.comments.map(
            (a,id) => {
            return <Comment a = {a} key={id}/>
            }
          )
          }
        </div>
  );
}

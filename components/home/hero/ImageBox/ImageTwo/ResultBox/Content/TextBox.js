import React from "react";
import Content from "../Content";

export default function TextBox() {
  return (
    <div className="text">
      <h5 className="title">Results of the week</h5>
      <div className="content">
        <p className="left">
          <span>you have lost</span>
          <span className="main">-4kg</span>
        </p>
        <p className="right">
          <span>you level up</span>
          <span className="main">Level 8</span>
        </p>
      </div>
    </div>
  );
}

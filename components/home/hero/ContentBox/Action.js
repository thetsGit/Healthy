import React from "react";
import ButtonStyled from "../../../styled/hero/ButtonStyled";

export default function Action() {
  return (
    <div className="action-btns">
      <ButtonStyled className="button">
        <span />
        <span />
        <span />
        <span className="text">Download app</span>
      </ButtonStyled>
      <div>
        <a href="#">
        <img
          src="images/icons/android.svg"
          className="icon"
          alt="android logo"
        ></img>
        </a>
        <a href="#">
        <img
          src="images/icons/app-store.svg"
          className="icon"
          alt="app store logo"
        ></img>
        </a>
      </div>
    </div>
  );
}

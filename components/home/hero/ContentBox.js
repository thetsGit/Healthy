import React from "react";
import ContentBoxStyled from "../../styled/ContentBoxStyled";
import BarStyled from "../../styled/BarStyled";
import ButtonStyled from "../../styled/hero/ButtonStyled";

export default function ContentBox() {
  return (
    <ContentBoxStyled className="content">
      <div className="snippet">
        <BarStyled />
        <span>The diet app, perfect for you</span>
      </div>
      <h2 className="title">
        <span className="main">Delicious</span> healthy recipes for you
      </h2>
      <p className="description">
        Find the best recipes to take your diet to another level, without
        affecting your health
      </p>
      <div className="action-btns">
        <ButtonStyled className="button">
          <span />
          <span />
          <span />
          <span className="text">Download app</span>
        </ButtonStyled>
        <div>
          <img
            src="images/icons/android.svg"
            className="icon"
            alt="android logo"
          ></img>
          <img
            src="images/icons/app-store.svg"
            className="icon"
            alt="app store logo"
          ></img>
        </div>
      </div>
      <ul className="social-links">
        <li>
          <a href="#">Facebook</a>
        </li>
        <span>/</span>
        <li>
          <a href="#" className="main">
            Instagram
          </a>
        </li>
        <span>/</span>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </ContentBoxStyled>
  );
}

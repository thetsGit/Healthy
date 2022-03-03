import React from "react";
import ContentBoxStyled from "../styled/ContentBoxStyled";
import FlexStyled from "../styled/FlexStyled";
import ContainerStyled from "../styled/ContainerStyled";
import BarStyled from "../styled/BarStyled";
import ButtonStyled from "../styled/ButtonStyled";

export default function Hero() {
  return (
    <ContainerStyled>
      <FlexStyled>
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
        </ContentBoxStyled>
        <div className="image"></div>
      </FlexStyled>
    </ContainerStyled>
  );
}

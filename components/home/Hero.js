import React from "react";
import FlexStyled from "../styled/FlexStyled";
import ContainerStyled from "../styled/ContainerStyled";
import RectangleStyled from "../styled/rectangleStyled";
import ContentBox from "./hero/ContentBox";
import ImageBox from "./hero/ImageBox";

export default function Hero() {
  return (
    <ContainerStyled className="hero">
      <FlexStyled className="hero">
        <ContentBox />
        <ImageBox />
      </FlexStyled>
      <RectangleStyled className="rectangle" />
    </ContainerStyled>
  );
}

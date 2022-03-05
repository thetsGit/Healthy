import React from "react";
import FlexStyled from "../styled/FlexStyled";
import ContainerStyled from "../styled/ContainerStyled";
import Rectangle from "../styled/Rectangle";
import ContentBox from "./hero/ContentBox";
import ImageBox from "./hero/ImageBox";

export default function Hero() {
  return (
    <ContainerStyled className="hero">
      <FlexStyled className="hero">
        <ContentBox />
        <ImageBox />
      </FlexStyled>
      <Rectangle className="rectangle" />
    </ContainerStyled>
  );
}

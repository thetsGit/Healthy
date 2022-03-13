import React from "react";
import ContainerStyled from "@/styled/ContainerStyled";
import FlexStyled from "@/styled/FlexStyled";
import ContentBox from "./discover/ContentBox";
import ImageBox from "./discover/ImageBox";
import GreenCircle from "@/styled/GreenCircle";
import Rectangle from "@/styled/Rectangle";

export default function Discover() {
  return (
    <ContainerStyled className="discover">
      <FlexStyled className="discover">
        <ImageBox />
        <ContentBox />
      </FlexStyled>
      <GreenCircle size="20" className="green-circle" />
      <Rectangle className="rectangle" />
    </ContainerStyled>
  );
}

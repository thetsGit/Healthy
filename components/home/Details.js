import React from "react";
import ContainerStyled from "../styled/ContainerStyled";
import FlexStyled from "../styled/FlexStyled";
import ContentBoxStyled from "../styled/ContentBoxStyled";
import ImageBoxStyled from "../styled/details/ImageBoxStyled";
import BarStyled from "../styled/BarStyled";
import NutritionBox from "./hero/ImageBox/ImageOne/NutritionBox";
import IngredientsBox from "./details/IngredientsBox";
import Content from "./details/Content";

export default function Details() {
  return (
    <ContainerStyled className="details">
      <FlexStyled className="details">
        <ContentBoxStyled className="content">
          <BarStyled />
          <Content />
        </ContentBoxStyled>
        <ImageBoxStyled className="image">
          <img className="details-ui" src="images/details.png" alt="details mobile ui" />
          <NutritionBox details={true} />
          <IngredientsBox />
        </ImageBoxStyled>
      </FlexStyled>
    </ContainerStyled>
  );
}

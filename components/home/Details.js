import React from "react";
import ContainerStyled from "../styled/ContainerStyled";
import FlexStyled from "../styled/FlexStyled";
import ContentBoxStyled from "../styled/ContentBoxStyled";
import ImageBoxStyled from "../styled/details/ImageBoxStyled";
import BarStyled from "../styled/BarStyled";
import NutritionBox from "./hero/ImageBox/ImageOne/NutritionBox";
import ingredients from "./details/data";
import Image from "next/image";

export default function Details() {
  return (
    <ContainerStyled className="details">
      <FlexStyled className="details">
        <ContentBoxStyled className="content">
          <BarStyled />
          <h2 className="title">
            <span className="main">Checkout</span> the details of the food
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            veritatis, sunt minus ea dolorem voluptas sint modi debitis animi
            maiores maxime dicta suscipit impedit, similique dolor repudiandae,
            perspiciatis saepe sequi!
          </p>
        </ContentBoxStyled>
        <ImageBoxStyled className="image">
          <img className="details-ui" src="images/details.png" alt="" />
          <NutritionBox details={true} />
          <div className="ingredients-box">
            {ingredients.map((ingredient) => (
              <img
                key={ingredient}
                src={"/images/ingredients/" + ingredient}
                alt={ingredient}
                className="image"
              />
            ))}
          </div>
        </ImageBoxStyled>
      </FlexStyled>
    </ContainerStyled>
  );
}

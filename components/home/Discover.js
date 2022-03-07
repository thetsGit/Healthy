import React from "react";
import ContainerStyled from "../styled/ContainerStyled";
import FlexStyled from "../styled/FlexStyled";
import ContentBoxStyled from "../styled/ContentBoxStyled";
import BarStyled from "../styled/BarStyled";
import ImageBoxStyled from "../styled/discover/ImageBoxStyled";
import dishes from "./discover/data/dishes";

export default function Discover() {
  return (
    <ContainerStyled>
      <FlexStyled className="discover">
        <ImageBoxStyled className="image">
          {dishes.map((dish) => (
            <div className="sheet" key={dish.name}>
              <img
                src={"/images/" + dish.image}
                className="image"
                alt={dish.image}
              />
              <h2 className="title">{dish.name}</h2>
              <div className="content">
                {dish.categories.map((category) => (
                  <div className="each-category" key={category.amount}>
                    <p className="amount">
                      <span className={category.main ? "main" : ""}>
                        {category.amount}
                      </span>
                    </p>
                    <p className="unit">{category.unit}</p>
                  </div>
                ))}
              </div>
              <div className="arrow">
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          ))}
          {/* <div className="sheet">
            <img
              src="/images/dish-1.svg"
              className="image"
              alt="Ensalada mixta photo"
            />
            <h2 className="title">Ensalada mixta</h2>
            <div className="content">
              <div className="each-category">
                <p className="amount">
                  <span className="main">243</span>
                </p>
                <p className="unit">calories</p>
              </div>
              <div className="each-category">
                <p className="amount">243</p>
                <p className="unit">calories</p>
              </div>
            </div>
          </div>
          <div className="sheet">
            <img
              src="/images/dish-2.svg"
              className="image"
              alt="Ensalada mixta photo"
            />
            <h2 className="title">Ensalada mixta</h2>
            <div className="content">
              <div className="each-category">
                <p className="amount">
                  <span className="main">243</span>
                </p>
                <p className="unit">calories</p>
              </div>
              <div className="each-category">
                <p className="amount">2,8g</p>
                <p className="unit">fat</p>
              </div>
            </div>
            <div className="arrow">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div> */}
        </ImageBoxStyled>
        <ContentBoxStyled className="content">
          <BarStyled />
          <h2 className="title">
            <span className="main">Discover</span> how to create healthy food
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            egestas accumsan odio, cursus laoreet mauris porttitor non. Aliquam
            eu neque nibh. Aenean non pellentesque justo.
          </p>
        </ContentBoxStyled>
      </FlexStyled>
    </ContainerStyled>
  );
}

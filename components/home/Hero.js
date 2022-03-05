import React from "react";
import ContentBoxStyled from "../styled/ContentBoxStyled";
import FlexStyled from "../styled/FlexStyled";
import ContainerStyled from "../styled/ContainerStyled";
import BarStyled from "../styled/BarStyled";
import ButtonStyled from "../styled/ButtonStyled";
import ImageBoxStyled from "../styled/ImageBoxStyled";
import GreenCircle from "../styled/GreenCircle";
import NutritionBoxStyled from "../styled/NutritionBoxStyled";
import ResultBoxStyled from "../styled/ResultBoxStyled";
import MiniCircleStyled from "../styled/miniCircleStyled";
import RectangleStyled from "../styled/rectangleStyled";

export default function Hero() {
  return (
    <ContainerStyled className="hero">
      <FlexStyled className="hero">
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
        <ImageBoxStyled className="image">
          <div className="image-1">
            <GreenCircle className="green-circle" size="22" />
            <NutritionBoxStyled className="nutrition-box">
              <h3 className="title">Nutritional information</h3>
              <div className="content">
                <span className="each-category">
                  <h4 className="main">243</h4>
                  <span className="mini">calories</span>
                </span>
                <span className="each-category">
                  <h4>2,8g</h4>
                  <span className="mini">fat</span>
                </span>
                <span className="each-category">
                  <h4>45,7g</h4>
                  <span className="mini">carbohydrate</span>
                </span>
                <span className="each-category">
                  <h4>9,8g</h4>
                  <span className="mini">proteins</span>
                </span>
              </div>
            </NutritionBoxStyled>
            <img
              className="image"
              src="images/login.png"
              alt="mobile app home page svg"
            />
          </div>
          <div className="image-2">
            <ResultBoxStyled className="result-box">
              <div className="more-btn">
                <MiniCircleStyled />
                <MiniCircleStyled />
              </div>
              <main className="content">
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
                <div className="circle">
                  <div className="semi"></div>
                  <div className="upper-circle">
                    520<span>Kcal</span>
                  </div>
                </div>
              </main>
              <footer className="footer-link">
                Never give up,{" "}
                <a href="#" className="know-more">
                  know more
                </a>
                <button className="arrow-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </footer>
            </ResultBoxStyled>
            <img
              className="image"
              src="images/home.png"
              alt="mobile app login page svg"
            />
          </div>
        </ImageBoxStyled>
      </FlexStyled>
      <RectangleStyled className="rectangle" />
    </ContainerStyled>
  );
}

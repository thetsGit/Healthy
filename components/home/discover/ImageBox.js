import React from "react";
import ImageBoxStyled from "../../styled/discover/ImageBoxStyled";
import dishes from "./data/dishes";

export default function ImageBox() {
  return (
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
    </ImageBoxStyled>
  );
}

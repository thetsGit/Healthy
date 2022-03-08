import React from "react";
import NutritionBoxStyled from "../../../../styled/NutritionBoxStyled";
import categories from "./NutritionBox/data";

export default function NutritionBox({ details }) {
  return (
    <NutritionBoxStyled className={details ? "details" : "nutrition-box"}>
      <h3 className="title">Nutritional information</h3>
      <div className="content">
        {categories.map((category) => (
          <section className="each-category" key={category.label}>
            <h4 className={category.main ? "main" : ""}>{category.amount}</h4>
            <span className="mini">{category.label}</span>
          </section>
        ))}
      </div>
    </NutritionBoxStyled>
  );
}

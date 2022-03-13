import React from "react";
import { forwardRef } from "react/cjs/react.production.min";
import NutritionBoxStyled from "@/styled/NutritionBoxStyled";
import categories from "./NutritionBox/data";
import { motion } from "framer-motion";

const NutritionBox = forwardRef(function NutritionBox(props, ref) {
  return (
    <NutritionBoxStyled className={props.details ? "details" : "nutrition-box"} ref={ref}>
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
});

export default motion(NutritionBox, {forwardMotionProps: true});

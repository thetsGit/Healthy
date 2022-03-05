import React from "react";
import GreenCircle from "../../../styled/GreenCircle";
import NutritionBox from "./ImageOne/NutritionBox";
import LoginImage from "./ImageOne/LoginImage";

export default function ImageOne() {
  return (
    <div className="image-1">
      <GreenCircle className="green-circle" size="22" />
      <NutritionBox />
      <LoginImage />
    </div>
  );
}

import React from "react";
import ImageBoxStyled from "../../styled/hero/ImageBoxStyled";
import ImageOne from "./ImageBox/ImageOne";
import ImageTwo from "./ImageBox/ImageTwo";

export default function ImageBox() {
  return (
    <ImageBoxStyled className="image">
      <ImageOne />
      <ImageTwo />
    </ImageBoxStyled>
  );
}

import React from "react";
import ContentBoxStyled from "../../styled/ContentBoxStyled";
import BarStyled from "../../styled/BarStyled";

export default function ContentBox() {
  return (
    <ContentBoxStyled className="content">
      <BarStyled />
      <h2 className="title">
        <span className="main">Discover</span> how to create healthy food
      </h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
        accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque
        nibh. Aenean non pellentesque justo.
      </p>
    </ContentBoxStyled>
  );
}

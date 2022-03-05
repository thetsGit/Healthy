import React from "react";
import ResultBoxStyled from "../../../../styled/ResultBoxStyled";
import Menu from "./ResultBox/Menu";
import Content from "./ResultBox/Content";
import Footer from "./ResultBox/Footer";

export default function ResultBox() {
  return (
    <ResultBoxStyled className="result-box">
      <Menu />
      <Content />
      <Footer />
    </ResultBoxStyled>
  );
}

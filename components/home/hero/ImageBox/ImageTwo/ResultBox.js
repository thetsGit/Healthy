import React from "react";
import ResultBoxStyled from "../../../../styled/ResultBoxStyled";
import Menu from "./ResultBox/Menu";
import Content from "./ResultBox/Content";
import Footer from "./ResultBox/Footer";
import { forwardRef } from "react/cjs/react.production.min";
import { motion } from "framer-motion";

const ResultBox = forwardRef(function ResultBox(props, ref) {
  return (
    <ResultBoxStyled className="result-box" ref={ref}>
      <Menu />
      <Content />
      <Footer />
    </ResultBoxStyled>
  );
});

export default motion(ResultBox, {forwardMotionProps: true});

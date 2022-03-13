import React, { useRef } from "react";
import ContainerStyled from "@/styled/ContainerStyled";
import FlexStyled from "@/styled/FlexStyled";
import ImageBoxStyled from "@/styled/details/ImageBoxStyled";
import NutritionBox from "./hero/ImageBox/ImageOne/NutritionBox";
import IngredientsBox from "./details/IngredientsBox";
import Content from "./details/Content";
import useView from "@/hooks/useView";
import templateVariants from "@/variants/templateVariants";
import { motion } from "framer-motion";

const imageVariants = {
  initial: {
    translateY: -300,
    opacity: 0
  },
  final: {
    translateY: 0,
    opacity: 1,
  }
}

const boxVariants = {
  initial: {
    translateX: -300,
    opacity: 0
  },
  final: {
    translateX: 0,
    opacity: 1,
  }
}

export default function Details() {
  const [controls, ref] = useView();
  const boxRef = useRef(null);

  return (
    <ContainerStyled className="details">
      <FlexStyled className="details">       
          <Content />
        <ImageBoxStyled className="image" as={motion.div} ref={ref} variants={templateVariants} initial="initial" animate={controls}>
          <motion.img className="details-ui" src="images/details.png" alt="details mobile ui" variants={boxVariants} />
          <NutritionBox details={true} ref={boxRef} variants={boxVariants} />
          <IngredientsBox />
        </ImageBoxStyled>
      </FlexStyled>
    </ContainerStyled>
  );
}

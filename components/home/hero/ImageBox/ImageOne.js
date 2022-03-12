import React, {useRef} from "react";
import GreenCircle from "../../../styled/GreenCircle";
import NutritionBox from "./ImageOne/NutritionBox";
import LoginImage from "./ImageOne/LoginImage";
import { motion } from "framer-motion";

const circleVariants = {
  initial: {
    scale: 0,
    translateX: "-50%",
    translateY: "-50%"
  },
  final: {
    scale: 1,
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 50
    }
  }
}

const imageVariants = {
  initial: {
      opacity: 0,
      translateY: 300
  },
  final: {
      opacity: 1,
      translateY: 0,
      transition: {
          delay: 1.4
      }
  }
}

const boxVariants = {
  initial: {
    opacity: 0,
    translateX: 300
  },
  final: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: 1.4
    }
  }
}

export default function ImageOne() {
  const nutritionBoxRef = useRef(null);
  const loginImageRef = useRef(null);

  return (
    <div className="image-1">
      <GreenCircle className="green-circle" size="22" as={motion.div} variants={circleVariants} initial="initial" animate="final" />
      <NutritionBox variants={boxVariants} initial="initial" animate="final" ref={nutritionBoxRef} />
      <LoginImage variants={imageVariants} initial="initial" animate="final" ref={loginImageRef} />
    </div>
  );
}

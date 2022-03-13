import React, {useRef} from "react";
import GreenCircle from "@/styled/GreenCircle";
import NutritionBox from "./ImageOne/NutritionBox";
import LoginImage from "./ImageOne/LoginImage";
import { motion } from "framer-motion";
import useView from "@/hooks/useView";
import templateVariants from "@/variants/templateVariants";

const circleVariants = {
  initial: {
    scale: 0,
    translateX: "-50%",
    translateY: "-50%"
  },
  final: {
    scale: 1,
    transition: {
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
        delay: .4
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
      delay: .4
    }
  }
}

export default function ImageOne() {
  const nutritionBoxRef = useRef(null);
  const loginImageRef = useRef(null);
  const [controls, ref] = useView();

  return (
    <motion.div className="image-1" ref={ref} variants={templateVariants} initial="initial" animate={controls}>
      <GreenCircle className="green-circle" size="22" as={motion.div} variants={circleVariants} />
      <NutritionBox variants={boxVariants} ref={nutritionBoxRef} />
      <LoginImage variants={imageVariants} ref={loginImageRef} />
    </motion.div>
  );
}

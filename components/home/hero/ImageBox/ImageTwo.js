import React, {useRef} from "react";
import ResultBox from "./ImageTwo/ResultBox";
import HomeImage from "./ImageTwo/HomeImage";
import templateVariants from "../../../../variants/templateVariants";
import useView from "../../../../hooks/useView";
import { motion } from "framer-motion";

const imageVariants = {
  initial: {
      opacity: 0,
      translateY: -300
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
    translateX: -300
  },
  final: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: .4
    }
  }
}

export default function ImageTwo() {
  const boxRef = useRef(null);
  const imageRef = useRef(null);
  const [controls, ref] = useView();

  return (
    <motion.div className="image-2" ref={ref} variants={templateVariants} initial="initial" animate={controls}>
      <ResultBox ref={boxRef} variants={boxVariants} />
      <HomeImage ref={imageRef} variants={imageVariants} />
    </motion.div>
  );
}

import React, {useRef} from "react";
import ResultBox from "./ImageTwo/ResultBox";
import HomeImage from "./ImageTwo/HomeImage";

const imageVariants = {
  initial: {
      opacity: 0,
      translateY: -300
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
    translateX: -300
  },
  final: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: 1.4
    }
  }
}

export default function ImageTwo() {
  const boxRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div className="image-2">
      <ResultBox ref={boxRef} variants={boxVariants} initial="initial" animate="final" />
      <HomeImage ref={imageRef} variants={imageVariants} initial="initial" animate="final" />
    </div>
  );
}

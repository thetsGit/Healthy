import React, {useEffect} from "react";
import ImageBoxStyled from "../../styled/discover/ImageBoxStyled";
import dishes from "./data/dishes";
import { motion } from "framer-motion";
import useView from "../../../hooks/useView";

const textBoxVariants = {
  initial: {
    scale: 0,
    opacity: 0
  },
  final: {
    scale: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: .1,
      type: "spring",
      stiffness: 50
    }
  }
}

const arrowVariants = {
  initial: {
    scale: 0,
    translateY: "30%",
    translateX: "30%",
    rotate: "360deg"
  },
  final: {
    scale: 1,
    rotate: 0
  }
}

const dishVariants = {
  initial: {
    scale: 0,
    rotate: "360deg"
  },
  final: {
    scale: 1,
    rotate: 0
  }
}

export default function ImageBox() {
  const [controls, ref] = useView();
  
  return (
    <ImageBoxStyled className="image">
      {dishes.map((dish) => (
        <motion.div className="sheet" key={dish.name} variants={textBoxVariants} initial="initial" animate={controls} ref={ref}>
          <motion.img
            src={"/images/" + dish.image}
            className="image"
            alt={dish.image}
            variants={dishVariants}
          />
          <h2 className="title">{dish.name}</h2>
          <div className="content">
            {dish.categories.map((category) => (
              <div className="each-category" key={category.amount}>
                <p className="amount">
                  <span className={category.main ? "main" : ""}>
                    {category.amount}
                  </span>
                </p>
                <p className="unit">{category.unit}</p>
              </div>
            ))}
          </div>
          <motion.div className="arrow" variants={arrowVariants}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </motion.div>
        </motion.div>
      ))}
    </ImageBoxStyled>
  );
}

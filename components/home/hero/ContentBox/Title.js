import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  initial: {y: 0},
  final: {
    y: 0,
    transition: {
      duration: .1,
      when: "beforeChildren",
      staggerChildren: .1
    }
  }
}

const wordVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
}

export default function Title() {
  return (
    <motion.h2 variants={titleVariants} initial="initial" animate="final" className="title">
      <motion.span variants={wordVariants} className="main">Delicious</motion.span>{" "}<motion.span variants={wordVariants}>healthy</motion.span>{" "}<motion.span variants={wordVariants}>recipes</motion.span>{" "}<motion.span variants={wordVariants}>for</motion.span>{" "}<motion.span variants={wordVariants}>you</motion.span>
    </motion.h2>
  );
}

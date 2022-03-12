import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const {ref, inView} = useInView({threshold: 1});

  useEffect(() => {
    inView ? controls.start("final") : 0;
  }, [controls, inView])
  
  return (
    <motion.h2 variants={titleVariants} animate={controls} initial="initial" className="title" ref={ref}>
      <motion.span variants={wordVariants} className="main">Delicious</motion.span>{" "}<motion.span variants={wordVariants}>healthy</motion.span>{" "}<motion.span variants={wordVariants}>recipes</motion.span>{" "}<motion.span variants={wordVariants}>for</motion.span>{" "}<motion.span variants={wordVariants}>you</motion.span>
    </motion.h2>
  );
}

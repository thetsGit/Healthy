import React, {useEffect} from "react";
import ContentBoxStyled from "../../styled/ContentBoxStyled";
import BarStyled from "../../styled/BarStyled";
import { motion } from "framer-motion";
import wordVariants from "../../../variants/wordVariants";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const templateVariants = {
  initial: {},
  final: {
    transition: {when: "beforeChildren", staggerChildren: .1}
  }
}

export default function ContentBox() {
  const controls = useAnimation();
  const [ref, inView] = useInView({threshold: 1});

  useEffect(() => {
    inView ? controls.start("final") : 0;

  }, [controls, inView])
  

  return (
    <ContentBoxStyled as={motion.section} className="content" variants={templateVariants} initial="initial" animate={controls} ref={ref}>
      <BarStyled />
      <motion.h2 className="title" variants={templateVariants}>
        <motion.span className="main" variants={wordVariants}>Discover</motion.span>{" "}<motion.span variants={wordVariants}>how</motion.span>{" "}<motion.span variants={wordVariants}>to</motion.span>{" "}<motion.span variants={wordVariants}>create</motion.span>{" "}<motion.span variants={wordVariants}>healthy</motion.span>{" "}<motion.span variants={wordVariants}>food</motion.span>
      </motion.h2>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
        accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque
        nibh. Aenean non pellentesque justo.
      </p>
    </ContentBoxStyled>
  );
}

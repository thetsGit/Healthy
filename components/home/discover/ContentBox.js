import React, {useEffect} from "react";
import ContentBoxStyled from "../../styled/ContentBoxStyled";
import BarStyled from "../../styled/BarStyled";
import { motion } from "framer-motion";
import wordVariants from "../../../variants/wordVariants";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import childVariants from "../../../variants/contentTextVariants";
import templateVariants from "../../../variants/templateVariants";

export default function ContentBox() {
  const controls = useAnimation();
  const [ref, inView] = useInView({threshold: 1});

  useEffect(() => {
    inView ? controls.start("final") : 0;

  }, [controls, inView])
  

  return (
    <ContentBoxStyled as={motion.section} className="content" variants={templateVariants} initial="initial" animate={controls} ref={ref}>
      <BarStyled as={motion.div} variants={childVariants}/>
      <motion.h2 className="title" variants={templateVariants}>
        <motion.span className="main" variants={wordVariants}>Discover</motion.span>{" "}<motion.span variants={wordVariants}>how</motion.span>{" "}<motion.span variants={wordVariants}>to</motion.span>{" "}<motion.span variants={wordVariants}>create</motion.span>{" "}<motion.span variants={wordVariants}>healthy</motion.span>{" "}<motion.span variants={wordVariants}>food</motion.span>
      </motion.h2>
      <motion.p className="description" variants={childVariants}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
        accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque
        nibh. Aenean non pellentesque justo.
      </motion.p>
    </ContentBoxStyled>
  );
}

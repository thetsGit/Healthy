import React, {useRef, useEffect} from "react";
import ContentBoxStyled from "@/styled/ContentBoxStyled";
import Title from "./ContentBox/Title";
import Description from "./ContentBox/Description";
import Action from "./ContentBox/Action";
import Social from "./ContentBox/Social";
import Snippet from "./ContentBox/Snippet";
import { motion } from "framer-motion";
import childVariants from "@/variants/contentTextVariants";
import useView from "@/hooks/useView";

const parentVariants = {
  initial: {
    opacity: 0
  },
  final: {
    opacity:1,
    transition: {
      duration: .1,
      when: "beforeChildren",
      staggerChildren: .2
    }
  }
}

export default function ContentBox() {
  const snippet = useRef(null);
  const description = useRef(null);
  const action = useRef(null);
  const social = useRef(null);
  const [controls, ref] = useView();
  

  return (
    <ContentBoxStyled ref={ref} className="content hero" as={motion.section} variants={parentVariants} initial="initial" animate={controls}>
      <Snippet variants={childVariants} ref={snippet} />
      <Title />
      <Description variants={childVariants} ref={description} />
      <Action variants={childVariants} ref={action} />
      <Social variants={childVariants} ref={social} />
    </ContentBoxStyled>
  );
}

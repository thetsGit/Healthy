import React, {useRef} from "react";
import ContentBoxStyled from "../../styled/ContentBoxStyled";
import Title from "./ContentBox/Title";
import Description from "./ContentBox/Description";
import Action from "./ContentBox/Action";
import Social from "./ContentBox/Social";
import Snippet from "./ContentBox/Snippet";
import { motion } from "framer-motion";

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

const childVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    }
  }
}

export default function ContentBox() {
  const snippet = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const action = useRef(null);
  const social = useRef(null);

  return (
    <ContentBoxStyled className="content hero" as={motion.section} variants={parentVariants} initial="initial" animate="final">
      <Snippet variants={childVariants} ref={snippet} />
      <Title ref={title} />
      <Description variants={childVariants} ref={description} />
      <Action variants={childVariants} ref={action} />
      <Social variants={childVariants} ref={social} />
    </ContentBoxStyled>
  );
}

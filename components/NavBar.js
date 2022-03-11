import React, { useState, useEffect, memo } from "react";
import NavBarStyled from "./styled/NavBarStyled";
import Container from "./navbar/Container";
import { motion } from "framer-motion";

const navVariants = {
  initial: {
    scale: 2,
    y: -1000,
  },
  final: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 25,
      delay: 0,
      duration: .3,
      stiffness: 50
    }
  }
}

export default function NavBar() {
  const [filled, setFilled] = useState(false);

  const scrollHandler = () => {
    console.log("invoked", window.pageYOffset);
    window.pageYOffset > 50 ? setFilled(true) : setFilled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [])
  
  return (
    <NavBarStyled as={motion.nav} variants={navVariants} initial="initial" animate="final" className={filled ? "filled" : ""}>
      <Container />
    </NavBarStyled>
  );
}

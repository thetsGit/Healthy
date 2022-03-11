import React, { useState, useEffect, memo } from "react";
import NavBarStyled from "./styled/NavBarStyled";
import Link from "next/link";
import Container from "./navbar/Container";

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
    <NavBarStyled className={filled ? "filled" : ""}>
      <Container />
    </NavBarStyled>
  );
}

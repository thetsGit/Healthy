import React, { useState } from "react";
import NavBarStyled from "./styled/NavBarStyled";
// import Image from "next/image";
import Link from "next/link";
import ContainerStyled from "./styled/ContainerStyled";

export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <NavBarStyled>
      <ContainerStyled className="container nav">
        <img src={"/images/logo.svg"} alt="a svg healthy logo" id="logo"></img>
        <div className={show ? "nav-links-wrap open" : "nav-links-wrap"}>
          <div className="left"></div>
          <ul className="middle">
            <li className="nav-item">
              <Link href="#">
                <a className="about">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="menu">Menu</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="contact">Contact</a>
              </Link>
            </li>
          </ul>
          <ul className="right">
            <li className="nav-item">
              <Link href="#">
                <a className="login">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="register">Register</a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          id="menu-btn"
          onClick={() => setShow(!show)}
          className={show ? "open" : ""}
        ></div>
      </ContainerStyled>
    </NavBarStyled>
  );
}

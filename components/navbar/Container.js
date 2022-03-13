import React, {memo, useState} from 'react'
import ContainerStyled from "@/styled/ContainerStyled";
import Link from 'next/link';

export default  memo( function Container() {
  const [show, setShow] = useState(false);

  return (
    <ContainerStyled className="container nav">
      <Link href="#hero"><a><img src={"/images/logo.svg"} alt="a svg healthy logo" id="logo"></img></a></Link>
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
  )
})

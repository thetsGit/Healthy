import React from "react";
import HiddenText from "components/styled/hiddenText";

export default function Footer() {
  return (
    <footer className="footer-link">
      Never give up,{" "}
      <a href="#" className="know-more">
        know more
      </a>
      <button className="arrow-btn" name="result box arrow btn">
        <HiddenText>Arrow Button</HiddenText>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </footer>
  );
}

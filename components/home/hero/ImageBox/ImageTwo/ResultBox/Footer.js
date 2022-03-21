import React from "react";
import HiddenText from "components/styled/hiddenText";

export default function Footer() {
  return (
    <footer className="footer-link">
      Never give up,{" "}
      <a href="#" className="know-more">
        know more
      </a>
      <button className="arrow-btn" aria-label="arrow button">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </footer>
  );
}

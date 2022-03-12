import React from "react";
import { forwardRef } from "react/cjs/react.production.min";
import { motion } from "framer-motion";

const Social = forwardRef(function Social(props, ref) {
  return (
    <ul className="social-links" ref={ref}>
      <li>
        <a href="#">Facebook</a>
      </li>
      <span>/</span>
      <li>
        <a href="#" className="main">
          Instagram
        </a>
      </li>
      <span>/</span>
      <li>
        <a href="#">Twitter</a>
      </li>
    </ul>
  );
});

export default motion(Social, {forwardMotionProps: true});

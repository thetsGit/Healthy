import { motion } from "framer-motion";
import React from "react";
import { forwardRef } from "react/cjs/react.production.min";

const HomeImage = forwardRef(function HomeImage(props, ref) {
  return (
    <img
      ref={ref}
      className="image"
      src="images/home.png"
      alt="mobile app login page svg"
    />
  );
});

export default motion(HomeImage, {forwardMotionProps: true})

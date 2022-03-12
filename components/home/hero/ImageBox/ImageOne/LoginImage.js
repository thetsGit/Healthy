import React from "react";
import { forwardRef } from "react/cjs/react.production.min";
import { motion } from "framer-motion";

const LoginImage = forwardRef(function LoginImage(props, ref) {
  return (
    <img
      ref={ref}
      className="image"
      src="images/login.png"
      alt="mobile app home page svg"
    />
  );
});

export default motion(LoginImage, {forwardMotionProps: true});

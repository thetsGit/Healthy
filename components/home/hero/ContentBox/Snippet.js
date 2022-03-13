import React, { forwardRef } from "react";
import BarStyled from "@/styled/BarStyled";
import { motion } from "framer-motion";

const Snippet = forwardRef(function Snippet(props, ref) {
  return (
    <div className="snippet" ref={ref}>
      <BarStyled />
      <span>The perfect diet app for you</span>
    </div>
  );
});

export default motion(Snippet, {forwardMotionProps: true});

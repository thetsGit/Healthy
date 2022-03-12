import { motion } from "framer-motion";
import React from "react";
import { forwardRef } from "react/cjs/react.production.min";

const Description = forwardRef(function Description(props, ref) {
  return (
    <p className="description" ref={ref}>
      Find the best recipes to take your diet to another level, without
      affecting your health
    </p>
  );
});

export default motion(Description, {forwardMotionProps: true})

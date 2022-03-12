import { motion } from "framer-motion";
import React, {forwardRef} from "react";
import ButtonStyled from "../../../styled/hero/ButtonStyled";

const Action = forwardRef(function (props, ref) {
  return (
    <div className="action-btns" ref={ref}>
      <ButtonStyled className="button">
        <span />
        <span />
        <span />
        <span className="text">Download app</span>
      </ButtonStyled>
      <div>
        <a href="#">
        <img
          src="images/icons/android.svg"
          className="icon"
          alt="android logo"
        ></img>
        </a>
        <a href="#">
        <img
          src="images/icons/app-store.svg"
          className="icon"
          alt="app store logo"
        ></img>
        </a>
      </div>
    </div>
  );
});

export default motion(Action, { forwardMotionProps: true })


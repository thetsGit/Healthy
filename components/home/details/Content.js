import React from 'react'
import BarStyled from '../../styled/BarStyled'
import { motion } from 'framer-motion'
import childVariants from '../../../variants/contentTextVariants'
import templateVariants from '../../../variants/templateVariants'
import wordVariants from '../../../variants/wordVariants'
import useView from "../../../hooks/useView"

export default function Content() {
  const [controls, ref] = useView();

  return (
    <motion.div variants={templateVariants} initial="initial" animate={controls} ref={ref}> 
        <BarStyled as={motion.div} variants={childVariants}/>
        <h2 className="title">
            <motion.span className="main" variants={wordVariants}>Checkout</motion.span>{" "}
            <motion.span variants={wordVariants}>the</motion.span>{" "}
            <motion.span variants={wordVariants}>details</motion.span>{" "}
            <motion.span variants={wordVariants}>of</motion.span>{" "}
            <motion.span variants={wordVariants}>the</motion.span>{" "}
            <motion.span variants={wordVariants}>food</motion.span>
        </h2>
        <motion.p className="description" variants={childVariants}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            veritatis, sunt minus ea dolorem voluptas sint modi debitis animi
            maiores maxime dicta suscipit impedit, similique dolor repudiandae,
            perspiciatis saepe sequi!
        </motion.p>
    </motion.div>
  )
}

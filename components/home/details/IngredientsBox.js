import React from 'react'
import ingredients from './data'
import { motion } from 'framer-motion'
import templateVariants from '@/variants/templateVariants'

const ingredientVariants = {
  initial: {
    opacity: 0,
    translateY: 30
  },
  final: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: .5
    }
  }
}

export default function IngredientsBox() {
  return (
    <div className="ingredients-box">
        {ingredients.map((ingredient) => (
            <motion.img
            key={ingredient}
            src={"/images/ingredients/" + ingredient}
            alt={ingredient}
            className="image"
            variants={ingredientVariants}
            />
        ))}
    </div>
  )
}

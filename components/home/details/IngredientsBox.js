import React from 'react'
import ingredients from './data'

export default function IngredientsBox() {
  return (
    <div className="ingredients-box">
        {ingredients.map((ingredient) => (
            <img
            key={ingredient}
            src={"/images/ingredients/" + ingredient}
            alt={ingredient}
            className="image"
            />
        ))}
    </div>
  )
}

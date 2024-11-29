import React from 'react'
import '../Recipe/Recipe.css'

const Recipe = ({recipe,handleBookMark}) => {
    const {recipe_id,recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipe;
  return (
    <div className='card-design'>
        <img className='img-size' src={recipe_image}></img>
        <h1 className='text-[1.25rem] font-semibold text-[#282828]'>{recipe_name}</h1>
        <h1 className='text-[1rem] font-normal text-[#878787]'>{short_description}</h1>
        <hr className='hr-design' />
        <h1 className='text-[1.125rem] font-medium text-[#282828]'>Ingredients: {ingredients.length}</h1>
        <ul className='list-disc list-inside text-[1.125rem] font-normal text-[#878787] fira-font'> {ingredients.map((ingredient, index) => ( <li key={index}>{ingredient}</li> ))} </ul>
        <hr className='hr-design' />
        <div className='flex justify-between fira-font text-[1rem] font-normal var8-black gap-4'>
          <div className='flex justify-between gap-2'>
          <img src="clock.png" alt="" srcset="" /><p>{preparing_time}</p>
          </div>
          <div className='flex justify-between gap-2'>
            <img src="calorie.png" alt="" srcset="" />
            <p>{calories}</p>
          </div>
          
        </div>
        <button onClick={()=>{handleBookMark(recipe)}} className='btn-cook mt-6 text-[1.125rem] font-medium text-[#150B2B]'>Want to Cook</button>

    </div>
  )
}

export default Recipe
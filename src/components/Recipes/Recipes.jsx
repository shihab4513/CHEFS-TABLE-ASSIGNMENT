import React, { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe';
import '../Recipes/Recipes.css'

const Recipes = () => {
const [recipes,setRecipes]=useState([]);
useEffect(()=>{
    fetch('recipes.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data))
},[])
    return (
        
        <div className='grid grid-cols-2 gap-6'>
        
  
        {
        //  blogs.map(blog=><Blog handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} key={blog.id} blog={blog}></Blog>)
        recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
        // 
        
        
        }
      </div>
  )
}

export default Recipes
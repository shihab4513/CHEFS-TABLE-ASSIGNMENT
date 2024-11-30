import React from 'react'

const Cook = ({bookmark,index,currentlyCooking}) => {
  return (
    <tr class="bg-base-200 font-normal ">
    
    <th>{index+1}</th>
    <td>{bookmark.recipe_name}</td>
    <td>{bookmark.preparing_time} minutes</td>
    <td className='flex items-center justify-between gap-3'>{bookmark.calories} calories <button onClick={()=>{currentlyCooking(bookmark)}} className='btn-prepare hover:bg-slate-300 text-[#150B2B] text-[1rem] font-medium'>Preparing</button></td>
    
    
  </tr>
  )
}

export default Cook
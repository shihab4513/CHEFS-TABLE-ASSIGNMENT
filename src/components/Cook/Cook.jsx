import React from 'react'

const Cook = ({bookmark,index}) => {
  return (
    <tr class="bg-base-200">
    
    <th>{index+1}</th>
    <td>{bookmark.recipe_name}</td>
    <td>{bookmark.preparing_time}</td>
    <td className='flex items-center justify-between gap-6'>{bookmark.calories} <button className='btn-prepare hover:bg-slate-300 text-[#150B2B] text-[1rem] font-medium'>Preparing</button></td>
    
    
  </tr>
  )
}

export default Cook
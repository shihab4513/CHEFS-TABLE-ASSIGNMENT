import React from 'react'

const Remain = ({remaining,index}) => {
  return (
    <tr class="bg-base-200 font-normal ">
    
    <th>{index+1}</th>
    <td>{remaining.recipe_name}</td>
    <td>{remaining.preparing_time} minutes</td>
    <td className='flex items-center justify-between gap-3'>{remaining.calories} calories</td>
    
    
  </tr>
  )
}

export default Remain
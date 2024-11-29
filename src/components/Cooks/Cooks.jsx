import React from 'react'
import '../Cooks/Cooks.css'
import Cook from '../Cook/Cook'

const Cooks = ({bookmarks}) => {
  return (
    <div className='md:w-1/3 bg-[#FFF] ml-6 pt-7 mt-10 h-full'>
    <div class="overflow-x-auto">
    <h1 className='text-center mb-4 text-[1.5rem] text-[#282828] font-semibold'>Want to cook: {bookmarks.length}</h1>
    <hr className='c-hr' />
   <table class="table">
    {/* head */}
    
    <thead>
      <tr className='text-[#878787] fira-font'>
        <th></th>
        <th className='text-[1rem] font-medium'>Name</th>
        <th className='text-[1rem] font-medium'>Time</th>
        <th className='text-[1rem] font-medium'>Calories</th>
      </tr>
    </thead>
    <tbody>
      {
       
        bookmarks.map((bookmark,index)=><Cook bookmark={bookmark} index={index}></Cook>)
      }
      
     
     
    </tbody>
  </table> 
</div>
</div>
  )
}

export default Cooks
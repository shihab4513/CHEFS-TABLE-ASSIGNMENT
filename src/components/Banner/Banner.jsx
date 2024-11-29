import React from 'react'
import '../Banner/Banner.css'

const Banner = () => {
  return (
    <div className='mb-12'> 
        <div class="relative z-10">
        <img src="banner picture.png" alt="" srcset="" class="w-full"/>
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="text-white text-[2.25rem] font-bold text-center">Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p class="text-white text-[1.125rem] font-normal text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
          <div className='flex justify-between gap-x-6'>
          <button class="text-[#150B2B] text-[1.25rem] font-semibold btn-explore mt-8 hover:bg-slate-500">Explore Now</button>
          <button class="text-white text-[1.25rem] font-semibold btn-feedback mt-8 hover:bg-slate-500">Our Feedback</button>
          </div>
          
        </div>
        </div>
        <div className='text-center mt-24'>
          <h1 className='text-[#150B2B] text-[2.5rem] font-semibold'>Our Recipes</h1>
          <p className='text-[1rem] font-normal sixty-white'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus.Eget <br />urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
    </div>
  )
}

export default Banner
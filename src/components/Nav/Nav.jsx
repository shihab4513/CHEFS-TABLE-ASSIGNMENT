import React from 'react'
import '../Nav/Nav.css'

const Nav = () => {
  return (
    <div className='px-4' >
    <div className='relative pt-6 pb-16 sm:pb-24'>
        <nav className='relative flex items-center justify-between sm:h-10 md:justify-center' aria-label="Global" >
            <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                    <h1 className='text-[2rem] font-bold text-[#150B2B]'>Recipe Calories</h1>
                  
                </div>
            </div>
            <div class="hidden md:flex md:space-x-10 list-none">
                <li>
                    <a href="#" class="text-base font-normal text-[1rem] seventy-white list-none hover:text-gray-900"
                        target="">Home</a>
                </li>
                <li>
                    <a href="#" class="text-base font-normal text-[1rem] list-none seventy-white hover:text-gray-900"
                        target="">Recipes
                    </a>
                </li>
                <li>
                    <a href="#" class="text-base font-normal text-[1rem] list-none seventy-white hover:text-gray-900"
                        target="_blank">About
                    </a>
                </li>
                <li>
                    
                <a href="#" class="text-base font-normal text-[1rem] seventy-white list-none hover:text-gray-900"
                        target="_blank">Search
                    </a>
                </li>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            
            <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-[16.25rem] ml-2 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[3.125rem] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[1rem] custom-placeholder" placeholder="Search" required />
        
        
    </div>
    <img className='ml-5 w-12 h-12' src="profile.png" alt="" />
            </div>
        </nav>
    </div>
</div>
  )
}

export default Nav
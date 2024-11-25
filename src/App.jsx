import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Cook from './components/Cook/Cook'

function App() {
  

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

      <div className='md:flex max-w-7xl mx-auto justify-between'>
      {/* <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark}></Blogs>  */}
      {/* <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>            */}
      <Recipes></Recipes>
      <Cook></Cook>
      </div>
    </>
  )
}

export default App

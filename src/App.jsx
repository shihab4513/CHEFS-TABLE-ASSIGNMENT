import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Cooks from './components/Cooks/Cooks'
import Toast from './components/Toast/Toast';


function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [toastMessage, setToastMessage] = useState(''); 
  const [showToast, setShowToast] = useState(false);
  const handleBookMark = dish => { 
    const existingBookmark = bookmarks.find(bookmark => bookmark.recipe_id === dish.recipe_id); 
    if (!existingBookmark) { 
      const newBookmarks = [...bookmarks, dish]; 
      setBookmarks(newBookmarks); 
     
    } else 
    { setToastMessage('already exists.'); 

     setShowToast(true); 
    setTimeout(() => setShowToast(false), 3000); 
  
  }
}
  return (
    <>
      <Nav></Nav>
      
      <Banner></Banner>
      {showToast && <Toast message={toastMessage}></Toast>}
      <div className='md:flex max-w-7xl mx-auto justify-between'>
      {/* <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark}></Blogs>  */}
      {/* <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>            */}
      <Recipes handleBookMark={handleBookMark}></Recipes>
      <Cooks bookmarks={bookmarks}></Cooks>
      </div>
    </>
  )
}

export default App

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
  const [bookmarks, setBookmarks] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [toastMessage, setToastMessage] = useState(''); 
  const [showToast, setShowToast] = useState(false);

  const handleBookMark = dish => { 
    const existingBookmark = bookmarks.find(bookmark => bookmark.recipe_id === dish.recipe_id); 
    if (!existingBookmark) { 
      const newBookmarks = [...bookmarks, dish]; 
      setBookmarks(newBookmarks); 
    } else { 
      setToastMessage('This bookmark already exists.'); 
      setShowToast(true); 
      setTimeout(() => setShowToast(false), 3000); 
    }
  };
  
  const currentlyCooking = dish => {
    const index = bookmarks.findIndex(bookmark => bookmark.recipe_id === dish.recipe_id); 
    if (index !== -1) { 
      const newBookmarks = [...bookmarks]; 
      const removedDish = newBookmarks.splice(index, 1)[0]; 
      setBookmarks(newBookmarks); 
      setRemaining([...remaining, removedDish]);
      
    }
    
  };
  const calculateTotals = (dishes) => { 
    return dishes.reduce((totals, dish) => { 
      totals.time += Number(dish.preparing_time); 
      totals.calories += Number(dish.calories); 
      return totals; 
    }, { time: 0, calories: 0 }); 
  };
    const totals = calculateTotals(remaining);

  return (
    <>
      <Nav />
      <Banner />
      {showToast && <Toast message={toastMessage} />}
      <div className='md:flex max-w-7xl mx-auto justify-between'>
        <Recipes handleBookMark={handleBookMark}  />
        <Cooks remaining={remaining} bookmarks={bookmarks} currentlyCooking={currentlyCooking} totalTime={totals.time} totalCalories={totals.calories} />
      </div>
    </>
  )
}

export default App

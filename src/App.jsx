// import { useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { PiChefHatLight } from 'react-icons/pi'
import Home from './features/home/Home'
import RecipeList from './features/recipes/RecipeList'
import Login from './features/user/Login'
import Register from './features/user/Register'
import UserProfile from './features/user/UserProfile'
import AddRecipe from './features/recipes/AddRecipe'
import { Link, Route, Routes } from 'react-router-dom'
import { onUserLoggedOut } from './features/user/userSlice'
import RecipeDetails from './features/recipes/RecipeDetails'

function App() {
  // const [count, setCount] = useState(0)

  const loggedInUser = useSelector(state => state.userDetails.loggedInUser)
  const dispatch=useDispatch();

  return (
    <>

      <header>
        <div id="logo"><PiChefHatLight />
        </div>

        <nav>
          <Link to="/">דף הבית</Link>
          <Link to="/recipes">מתכונים</Link>
          {loggedInUser == null && <Link to="/login">התחברות</Link>}
          {loggedInUser == null && <Link to="/register">הרשמה</Link>}
          {loggedInUser != null && <Link to="/user-profile">הפרופיל שלי</Link>}
          {loggedInUser != null && <Link to="add-recipe">הוספת מתכון</Link>}
          {loggedInUser != null && <Link to="/" className='loggedOutBtn' onClick={()=>{dispatch(onUserLoggedOut())}}>התנתקות</Link>}
          {/* {loggedInUser != null && <p>שלום לך  {loggedInUser.username}</p>} */}
        </nav>

      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />

      </Routes>

    </>
  )
}

export default App;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Recipe from '../recipes/Recipe';

const UserProfile = () => {

  const user = useSelector(state => state.userDetails.loggedInUser)
  const recipes = useSelector(state => state.recipes.recipes)

  const [userRecipes, setUserRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);


  useEffect(() => {
    const fRecipes = [];
    for (let i = 0; i < user.favorites.length; i++) {
      const re = recipes.find(r => r.id == user.favorites[i]);
      fRecipes.push(re);
    }
    const uRecipes = recipes.filter(r => r.userId == user.id)
    setFavoriteRecipes(fRecipes);
    setUserRecipes(uRecipes);

  }, [])


  return (
    <div>
      <h1>הפרופיל שלי</h1>


      <h2>שלום ל{user?.username}  </h2>
      <hr></hr>
      <h2>המתכונים שיצרת:</h2>
      <div className="recipeInProfile">
        {userRecipes.map(r => <Recipe id={r.id} author={r.author} name={r.name} img={r.img} time={r.time} level={r.level} numOfProduct={r.ingredients.length}  />)}
      </div>

      <hr></hr>
      <h2>המתכונים שאהבת:</h2>
      <div className="recipeInProfile">
        {favoriteRecipes.map(r => <Recipe id={r.id} author={r.author} name={r.name} img={r.img} time={r.time} level={r.level} numOfProduct={r.ingredients.length}  />)}
      </div>
    </div>
  )
}

export default UserProfile;
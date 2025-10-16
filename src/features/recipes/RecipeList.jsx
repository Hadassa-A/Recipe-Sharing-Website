import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import { useSelector } from 'react-redux'

const RecipeList = () => {

    const recipes = useSelector((state) => state.recipes.recipes);
    const [filteredRecipe, setFilteredRecipe] = useState(recipes);

    useEffect(() => {
        setFilteredRecipe(recipes)
    }, [recipes])

    const filterRecipes = (searchTxt) => {
        const newRecipeArr = recipes.filter(r => r.name.includes(searchTxt)||r.category.includes(searchTxt));
        setFilteredRecipe(newRecipeArr);
    }

    return (
        <div>
            <h1>נבחרת המתכונים שלנו</h1>
            <div id="search">
                <input placeholder={"הקלד את מה שאתה רוצה לחפש..."} onChange={(e) => filterRecipes(e.target.value)} />
            </div>
            <div className='recipiesList'>
                {filteredRecipe.map((r) => <Recipe id={r.id} author={r.author} name={r.name} img={r.img} time={r.time} level={r.level} numOfProduct={r.ingredients.length} />)}
            </div>
        </div>
    )
}

export default RecipeList;
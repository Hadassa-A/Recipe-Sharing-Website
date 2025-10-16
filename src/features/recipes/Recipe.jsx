import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3, BsClockHistory } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { onRecipeDetails } from "./RecipesSlice";
import { useNavigate } from "react-router-dom";
import { TbStairs } from "react-icons/tb";
import { onLikeBtn } from "../user/userSlice";



const Recipe = ({ id, author, name, img, level, time, numOfProduct }) => {


    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.recipes);
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.userDetails.loggedInUser);



    const onDetailClick = (recipeId) => {

        dispatch(onRecipeDetails(recipeId))
        navigate("/recipe-details")
    }

    const onLikeClick = (recipeId) => {
        if (currentUser) {
            dispatch(onLikeBtn(recipeId));
            alert("המתכון התווסף למועדפים")
        } else { alert("אין משתמש מחובר") }
        // console.log(userId)
    }


    return (
        <div className="recipy">
            <div className="recipeHeader">
                <p className="author">
                    <span> <FaUser /></span>
                    {author} 
                    <button className="likeBtn" onClick={() => { onLikeClick(id) }}><FaRegHeart /></button>
                </p>
                <hr />
            </div>

            <img src={"/images/recipe/" + img} />

            <h1>{name} </h1>
            <div className="bottomRecipe">
                <div className="details">
                    <p> <BsCart3 />{numOfProduct} מצרכים </p>
                    <p> <BsClockHistory />{time}  </p>
                    <p> <TbStairs /> {level} </p>
                </div>

                <button className="detailsBtn" onClick={() => { onDetailClick(id) }} >לפרטים</button>
            </div>

        </div>
    )
}

export default Recipe;
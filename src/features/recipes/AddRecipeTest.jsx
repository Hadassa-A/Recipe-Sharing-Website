import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "./RecipesSlice";
import { useNavigate } from "react-router-dom";
import { LuMinus } from "react-icons/lu";


const AddRecipe = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(state => state.userDetails.loggedInUser);

    const [recipe, setRecipe] = useState({
        id: 0,
        name: "",
        desc: "",
        level: "",
        time: "",
        category: "",
        ingredients: [],
        instructions: "",
        img: "generalRecipe.jpg",
        userId: "",
        author: 0
    })

    const [ingredients, setIngredients] = useState([]);
    const [ingredientValue, setIngredientValue] = useState("");

 

    const onInputChange = (name, value) => {
        const modifiedRecipe = { ...recipe }
        modifiedRecipe[name] = typeof (value) === Number ? Number(value) : value;
        setRecipe(modifiedRecipe);
    };

    const saveRecipe = () => {
       
        if (currentUser === null) {
            alert("התחבר ואז הוסף מתכון")
            return;
        }
        const newRecipe = { ...recipe }
        newRecipe.userId = currentUser.id;
        newRecipe.author = currentUser.username;
        newRecipe.ingredients = ingredients;
        dispatch(addRecipe(newRecipe));
        alert("הוספת מתכון למאגר הטעים שלנו:)")
        navigate("/recipes")
    };

    const addIngredient = () => {
        if (ingredientValue !== "") {
            const modifiedIngredients = [...ingredients, ingredientValue];
            setIngredients(modifiedIngredients);
            setIngredientValue("");
        }
    };

    const deleteIngredient = () => {
        const modifiedIngredients = [...ingredients];
        modifiedIngredients.pop()
        setIngredients(modifiedIngredients);
        setIngredientValue("");
    };



    return (
        <div>
            <form id='addRecipyForm'>

                <h1>הוספת מתכון חדש</h1>
                <label>שם המתכון</label>
                <input type="text" name="name" onChange={(e) => { onInputChange(e.target.name, e.target.value) }} />
                <label>כמה מילים על המתכון  </label>
                <input type="text" name="desc" onChange={(e) => { onInputChange(e.target.name, e.target.value) }} />
                <label>קטגוריה </label>
                <input type="text" name="category" placeholder='  מטבלים / מאפים / עוגיות / עוגות / מנה ראשונה' onChange={(e) => { onInputChange(e.target.name, e.target.value) }} />
                <label>מרכיבים </label>
                <div id="addIngredientForm">
                    <input type='text' name="ingredient" placeholder='דוגמא: 2 כוסות קמח....' value={ingredientValue} onChange={e => { setIngredientValue(e.target.value) }} />
                    <button type="button" onClick={() => { addIngredient() }}>הוספת רכיב <IoAddOutline /></button>
                    <button type="button" onClick={() => { deleteIngredient() }}>הסרת רכיב <LuMinus /></button>
                </div>

                <ul>
                    {ingredients.length === null ? "הוסיפי רכיבי מתכון" : ingredients.map(i => <li>{i}</li>)}
                </ul>

                <label>זמן הכנה </label>
                <input type="text" name="time" placeholder='30 דקות' onChange={(e) => { onInputChange(e.target.name, e.target.value) }} />
                <label>דרגת קושי </label>
                <input type="text" name="level" placeholder='קל / בינוני / קשה' onChange={(e) => { onInputChange(e.target.name, e.target.value) }} />
                <label>אופן ההכנה </label>
                <textarea name="instructions" placeholder='הקלידי את ההוראות כאן...' onChange={(e) => { onInputChange(e.target.name, e.target.value) }} />
                <button type="button" onClick={() => { saveRecipe() }}>הוסף את המתכון</button>
            </form>
        </div>
    )
}

export default AddRecipe;   
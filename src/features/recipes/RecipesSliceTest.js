import { createSlice } from "@reduxjs/toolkit";

const loadRecipesFromLocalStorage = () => {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
};

const initialState = {


    recipes: loadRecipesFromLocalStorage(),
    arrRecipes:
    [
        {
            id: 1,
            name: "רעידת אדמה",
            desc: "עוגיות מקסימות!",
            level: "קל",
            time: "30 דקות",
            category: "עוגיות",
            ingredients: [
                "קמח",
                "סוכר",
                "ביצים",
                "קפה"
            ],
            instructions: "ערבבי",
            img: "earrthquakeCookies.jpg",
            userId: 1,
            author: "מירי"
        }
    ],


currentRecipe: null
};

// {

//     recipes: [
//         {
//             id: 1,
//             name: "רעידת אדמה",
//             desc: "עוגיות מקסימות!",
//             level: "קל",
//             time: "30 דקות",
//             category: "עוגיות",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "earrthquakeCookies.jpg",
//             userId: 1,
//             author: "מירי"
//         },
//         {
//             id: 2,
//             name: "עוגיות בריאות",
//             desc: "קראנצ'י ויאמי",
//             level: "קל",
//             time: "25 דקות",
//             category: "עוגיות",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "oatmealCookies.jpg",
//             userId: 2,
//             author: "נעמה"
//         },
//         {
//             id: 3,
//             name: "רוטב פסטו",
//             desc: "הולך עם כל דבר",
//             level: "בינוני",
//             time: "45 דקות",
//             category: "מטבלים",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "ביצים",
//                 "ביצים",
//                 "ביצים",
//                 "ביצים",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "pesto.jpg",
//             userId: 4,
//             author: "הדסה"
//         },
//         {
//             id: 4,
//             name: "פיצה",
//             desc: "פיצה מגניבה:)",
//             level: "קל",
//             time: "30 דקות",
//             category: "מאפים",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "ביצים",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "pizza.jpg",
//             userId: 1,
//             author: "שושי"
//         },
//         {
//             id: 5,
//             name: "דג סלומון",
//             desc: "מנה ראשונה טעימה במיוחד",
//             level: "קל",
//             time: "15 דקות",
//             category: "מנה ראשונה",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "salomon.jpg",
//             userId: 1,
//             author: "גילה"
//         },
//         {
//             id: 6,
//             name: "עוגיות סוכר",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "קל",
//             time: "25 דקות",
//             category: "עוגיות",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "sugarCookies.jpg",
//             userId: 4,
//             author: "הדסה"
//         },
//         {
//             id: 7,
//             name: "מאפה שמרים",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "קל",
//             time: "40 דקות",
//             category: "עוגיות",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים"
//             ],
//             instructions: "ערבבי",
//             img: "cinnamon-rolls.jpg",
//             userId: 9,
//             author: "ביילי"
//         },
//         {
//             id: 8,
//             name: "עוגת גבינה",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "בינוני",
//             time: "35 דקות",
//             category: "עוגות",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "ביצים",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "cheesecake.jpg",
//             userId: 15,
//             author: "רוחי"
//         },
//         {
//             id: 9,
//             name: "ממרח חומוס",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "קל",
//             time: "25 דקות",
//             category: "מטבלים",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "hummus.jpg",
//             userId: 12,
//             author: "תהילה"
//         },
//         {
//             id: 10,
//             name: "כדורי פלאפל",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "קל",
//             time: "25 דקות",
//             category: "מנה ראשונה",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "falafelBalls.jpg",
//             userId: 12,
//             author: "תהילה"
//         },
//         {
//             id: 11,
//             name: "רוטב פיצה",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "קל",
//             time: "25 דקות",
//             category: "מטבלים",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "pizzaSause.jpg",
//             userId: 12,
//             author: "תהילה"
//         },
//         {
//             id: 12,
//             name: "בראוניז",
//             desc: "עוגיות סוכר ישראליות וקלאסיות",
//             level: "קל",
//             time: "25 דקות",
//             category: "עוגיות",
//             ingredients: [
//                 "קמח",
//                 "סוכר",
//                 "ביצים",
//                 "קפה"
//             ],
//             instructions: "ערבבי",
//             img: "brownies.jpg",
//             userId: 12,
//             author: "תהילה"
//         }
//     ],
//     currentRecipe: null
// }


//reducer:
const recipes = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            const recipeObj = action.payload;
            state.recipes.push(recipeObj);
            localStorage.setItem('recipes', JSON.stringify(state.recipes));
        },
        onRecipeDetails: (state, action) => {
            const recipeId = action.payload;
            const recipe = state.recipes.find(r => r.id === recipeId)
            state.currentRecipe = recipe;
        },
        onCloseRecipeDetails: (state) => {
            state.currentRecipe = null;
        }
    }
})

//export:
export const { addRecipe, onRecipeDetails, onCloseRecipeDetails } = recipes.actions;
export default recipes.reducer;
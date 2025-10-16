import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "../features/user/userSlice";
import recipesReducer from "../features/recipes/RecipesSlice";



export const Store = configureStore(
    {
        reducer: {
            //xxxx:reducer,
            userDetails: userDetailsReducer,
            recipes: recipesReducer
        }
    }
)
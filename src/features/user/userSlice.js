import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

//state:
const initialState = {
    users: [
        {
            id: 1,
            username: "יעל כהן",
            email: "y@gmail.com",
            password: "1111",
            favorites: [2, 3]
        },
        {
            id: 2,
            username: "אפרת לוי",
            email: "e@gmail.com",
            password: "2222",
            favorites: [1]
        },
        {
            id: 3,
            username: "ברכה סגל",
            email: "b@gmail.com",
            password: "3333",
            favorites: [4, 5, 6]
        },
        {
            id: 4,
            username: "הדסה",
            email: "h0504170068@gmail.com",
            password: "1234",
            favorites: [1]
        }
    ],
    loggedInUser: null
}

//reducer:

const userDetails = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        onUserLoggedIn: (state, action) => {
            const user = action.payload;
            state.loggedInUser = user;
        },
        onUserRegister: (state, action) => {
           const newUser=action.payload;
            state.users.push(newUser);
            state.loggedInUser = newUser;
        },
        onUserLoggedOut: (state) => {
            state.loggedInUser = null;
        },
        onLikeBtn: (state,action) => {
            const recipeId=action.payload;
            const index = state.users.findIndex(u => u.id === state.loggedInUser.id )
            state.users[index].favorites.push(recipeId)
            console.log(index)
        }
    }
})

//export:

export const { onUserLoggedIn, onUserRegister, addFavoriteRecipe, onUserLoggedOut,onLikeBtn } = userDetails.actions;
export default userDetails.reducer;
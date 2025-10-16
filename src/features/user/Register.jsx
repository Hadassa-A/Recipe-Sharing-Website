import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { onUserRegister, onUserLoggedIn } from './userSlice';

const Register = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onEmailChange = (e) => setUserEmail(e.target.value);
    const onPasswordChange = (e) => setUserPassword(e.target.value);
    const onUsernameChange = (e) => setUsername(e.target.value);

    const users = useSelector((state) => state.userDetails.users);
    const loggedInUser =useSelector((state)=>state.userDetails.loggedInUser)


    const onRegister = () => {
        const user = users.find(u => u.email === userEmail);
        if (user !== undefined)
            alert("האימייל כבר קיים במערכת");
        else {
            const newUser = {
                id: users.length + 1,
                username: username,
                password: userPassword,
                email: userEmail,
                favorites: []
            };
            alert("נרשמת בהצלחה!");
            dispatch(onUserRegister(newUser))
            navigate("/user-profile");
        }
        console.log(loggedInUser);
        
    }

    return (
        <div>
            <form>
                <h1>הרשמה</h1>
                <label>שם משתמש</label>
                <input type="text" name="username" value={username} onChange={onUsernameChange} />
                <label>אימייל </label>
                <input type="email" name="email" value={userEmail} onChange={onEmailChange} />
                <label>סיסמא </label>
                <input type="password" name="password" value={userPassword} onChange={onPasswordChange} />
                <Link to="/Login">למעבר להתחברות</Link>
                <button type="button" onClick={() => { onRegister() }} >הרשם</button>
            </form>
        </div>

    )
}

export default Register;
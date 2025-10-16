import React from 'react'
import { useState } from 'react'
import { onUserLoggedIn } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.userDetails.users);
  
  const onNameChange = (e) => setUserName(e.target.value);
  const onEmailChange = (e) => setUserEmail(e.target.value);
  const onPasswordChange = (e) => setUserPassword(e.target.value);

  const onLogin = () => {
    const user = users.find(u => u.username === userName && u.email === userEmail && u.password === userPassword);
    if (user === undefined)
      alert("אופססס, אחד הפרטים אינו תקין");
    else {
      alert(`ברוך הבא ${user.username}`);
      dispatch(onUserLoggedIn(user));
      navigate("/user-profile");
    }
  }


  return (

    <div >
      <div>
      <form>
        <h1>התחברות</h1>
        <label>שם משתמש </label>
        <input type="name" name="name" value={userName} onChange={onNameChange} />
        <label>אימייל </label>
        <input type="email" name="email" value={userEmail} onChange={onEmailChange} />
        <label>סיסמא </label>
        <input type="password" name="password" value={userPassword} onChange={onPasswordChange} />
        <Link to="/Register">למעבר להרשמה</Link>
        <button type="button" onClick={() => { onLogin() }}>התחבר</button>
      </form>
      </div>
    </div>

  )
}

export default Login;
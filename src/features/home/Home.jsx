import React, { useEffect, useState } from 'react'
import { LuChefHat } from 'react-icons/lu'
import { useSelector } from 'react-redux';
import { MdLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const Home = () => {


    const recipes = useSelector((state) => state.recipes.recipes);
    const users = useSelector((state) => state.userDetails.users);
    const [number, setNumber] = useState(recipes);
    const [numOfUsers, setNumOfUsers] = useState(recipes);

    useEffect(() => {
        setNumber(recipes)
        setNumOfUsers(users)
    }, [recipes])




    return (
        <div className='home'>
            <h1>אתר המתכונים הפופולארי בישראל</h1>
            <div className="info">
                <p>{users.length} משתמשים מחוברים
                    <FaUserFriends fontSize={"5rem"} color={"#bc1a1a"} />
                </p>
                <p>{recipes.length} מתכונים

                    <MdLibraryBooks fontSize={"5rem"} color={"#bc1a1a"} />
                </p>
                <p> 18 שפים
                    <LuChefHat fontSize={"5rem"} color={"#bc1a1a"} />
                </p>
            </div>
        </div>
    )
}

export default Home
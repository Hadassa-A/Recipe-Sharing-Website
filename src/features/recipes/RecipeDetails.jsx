import { useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { TbStairs } from "react-icons/tb";

const RecipeDetails = () => {

    const currentRecipe = useSelector((state) => state.recipes.currentRecipe);
    const navigate = useNavigate();

    const closePopup = () => {
        navigate(-1)
    };


    return (
        <div>

            {
                currentRecipe &&

                < div className="popup" >

                    <div className="popupContent">
                        <span className="close"> <IoIosClose onClick={closePopup} /> </span>
                        <h1>{currentRecipe.name}</h1>
                        <hr></hr>
                        <h2>{currentRecipe.desc}</h2>
                        <hr></hr>
                        <p> <TbStairs />  רמת קושי: {currentRecipe.level}</p>
                        <p> <BsClockHistory />  זמן הכנה: {currentRecipe.time}</p>
                        <hr></hr>
                        <h3>מרכיבים:</h3>
                        <ul>
                            {currentRecipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <hr></hr>
                        <h3>הוראות הכנה:</h3>
                        <p>{currentRecipe.instructions}</p>
                    </div>
                </div>
            }
        </div >
    )

}
export default RecipeDetails
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recipes: [
        {
            id: 1,
            name: "רעידת אדמה",
            desc: "עוגיות מקסימות!",
            level: "קל",
            time: "30 דקות",
            category: "עוגיות",
            ingredients: [
                "4 ביצים",
                "2 כוסות סוכר",
                "1 כוס קקאו",
                "1 כוס שמן",
                "4 כוסות קמח",
                "1 אבקת אפיה",
                "2 סוכר וניל"
            ],
            instructions: "הקציפי את הביצים עם הסוכר, והוסיפי את כל המצרכים בעזרת מקצף.  הקפיאי את הבצק למשך שעתיים, צרי כדורים, טבלי באבקת סוכר. אפי בתנור מחומם מראש ל 180 מעלות למשך 12 דקות",
            img: "earrthquakeCookies.jpg",
            userId: 1,
            author: "מירי"
        },
        {
            id: 2,
            name: "עוגיות בריאות",
            desc: "קראנצ'י ויאמי",
            level: "קל",
            time: "25 דקות",
            category: "עוגיות",
            ingredients: [
                "קמח",
                "סוכר",
                "ביצים",
                "קפה"
            ],
            instructions: "ערבבי",
            img: "oatmealCookies.jpg",
            userId: 2,
            author: "נעמה"
        },
        {
            id: 3,
            name: "רוטב פסטו",
            desc: "הולך עם כל דבר",
            level: "בינוני",
            time: "45 דקות",
            category: "מטבלים",
            ingredients: [
                "קמח",
                "סוכר",
                "ביצים",
                "ביצים",
                "ביצים",
                "ביצים",
                "ביצים",
                "ביצים",
                "קפה"
            ],
            instructions: "ערבבי",
            img: "pesto.jpg",
            userId: 4,
            author: "הדסה"
        },
        {
            id: 4,
            name: "פיצה",
            desc: "פיצה מגניבה:)",
            level: "קל",
            time: "30 דקות",
            category: "מאפים",
            ingredients: [
                "2 כפות שמרים",
                "1/2 כוס סוכר",
                "3 כוסות מים פושרים",
                "1 קילו קמח",
                "כף שטוחה מלח",
                "כוס שמן"
            ],
            instructions: "התסיסי בקערה את השמרים הסוכר והמים למשך 10 דקות, בקערה נוספת ערבבי קמח, מלח ושמן. אחדי ולושי. צרי צורה של פיצה ופזרי גבינות וירקות לפי הטעם. אפי למשך 7 דקות על 270 מעלות",
            img: "pizza.jpg",
            userId: 1,
            author: "שושי"
        },
        {
            id: 5,
            name: "דג סלומון",
            desc: "מנה ראשונה טעימה במיוחד",
            level: "קל",
            time: "10 דקות",
            category: "מנה ראשונה",
            ingredients: [
                "4 פרוסות דג סלומון",
                "כף חרדל",
                "כף דבש",
            ],
            instructions: "הניחי את הדג בתבנית, שפכי מעליו את הדבש והחרדל כשהם מעורבבים, אפי למשך 20 דקות",
            img: "salomon.jpg",
            userId: 1,
            author: "גילה"
        },
        {
            id: 6,
            name: "עוגיות סוכר",
            desc: "עוגיות סוכר ישראליות קלאסיות",
            level: "קל",
            time: "25 דקות",
            category: "עוגיות",
            ingredients: [
                "1 קילו קמח",
                "1 כוס שמן",
                "1 מרגרינה או כוס שמן",
                "1 1/2 כוס סוכר",
                "כוס מיץ מיץ תפוזים או מים",
                "3 ביצים",
                "2 אבקת אפיה",
                "2 סוכר וניל"
            ],
            instructions: "לושי היטב, רדדי וצרי צורות. אפי בתנור מחומם מראש על 180 מעלות",
            img: "sugarCookies.jpg",
            userId: 4,
            author: "הדסה"
        },
        {
            id: 7,
            name: "מאפה שמרים",
            desc: "טעימטעים",
            level: "קל",
            time: "40 דקות",
            category: "עוגיות",
            ingredients: [
                "2 כפות שמרים",
                "3/4 כוס סוכר",
                "3 כוסות מים פושרים",
                "1 קילו קמח",
                "כף שטוחה מלח",
                "כוס שמן"
            ],
            instructions: "ערבבי",
            img: "cinnamon-rolls.jpg",
            userId: 9,
            author: "ביילי"
        },
        {
            id: 8,
            name: "עוגת גבינה",
            desc: "מכינים במהירות ונגמרת במהירות",
            level: "קל",
            time: "35 דקות",
            category: "עוגות",
            ingredients: [
                "2 כוסות קמח",
                "3/4 כוס סוכר",
                "1 ביצה",
                "1 אבקת אפיה",
                "1/2 כוס שמן או 1/2 חבילת חמאה",
                "1/2 קילו גבינה",
                "1 ריץ' או שמנת מתוקה להקצפה",
                "3 כפות פודינג",
            ],
            instructions: "בצק: לושי קמח, 1/4 כוס סוכר אבקת אפיה וביצה. 2/3 מהבצק שטחי בתבנית A4 והנותר אפי כפרורים. קרם גבינה: הקציפי את השמנת המתוקה עם כף סוכר והוסיפי את שאר המצרכים. שפכי את הגבינה על הבצק, פוררי את הפרורים מלמעלה והקפיאי",
            img: "cheesecake.jpg",
            userId: 15,
            author: "רוחי"
        },
        {
            id: 9,
            name: "ממרח חומוס",
            desc: "לא תפסיקו לנגב...",
            level: "קל",
            time: "25 דקות",
            category: "מטבלים",
            ingredients: [
                "גרגירי חומוס מבושלים",
                "טחינה גולמית",
                "מלח",
                "שום"
            ],
            instructions: "טחני הכל בבלנד ושפרי לפי הטעם",
            img: "hummus.jpg",
            userId: 12,
            author: "תהילה"
        },
        {
            id: 10,
            name: "כדורי פלאפל",
            desc: "לא תמצאו כאלה דברים",
            level: "קל",
            time: "25 דקות",
            category: "מנה ראשונה",
            ingredients: [
                "חומוס",
                "קמח",
                "שמן",
                "מלח",
                "שום"
            ],
            instructions: "טחני הכל בבלנדר וטגני בשמן עמוק",
            img: "falafelBalls.jpg",
            userId: 12,
            author: "ביילי"
        },
        {
            id: 11,
            name: "רוטב פיצה",
            desc: "בטעם ביתי",
            level: "קל",
            time: "20 דקות",
            category: "מטבלים",
            ingredients: [
                "רסק עגבניות",
                "מיונז",
                "שום",
                "שמן",
                "מלח",
                "סוכר"
            ],
            instructions: "טחני הכל בבלנדר מוט",
            img: "pizzaSause.jpg",
            userId: 12,
            author: "ריקי"
        },
        {
            id: 12,
            name: "בראוניז",
            desc: "מתכון אמריקאי מקורי",
            level: "קל",
            time: "15 דקות",
            category: "עוגיות",
            ingredients: [
                "1 כוס קמח",
                "1 (או עוד 3/4 כוס קמח) כוס שקדים קצוצים",
                "2/3 כוס קקאו",
                "2 כוסות סוכר",
                "מעט תמצית וניל",
                "כוס שמן",
                "4 ביצים",
                "שוקולד שוקוצ'יפס"
            ],
            instructions: "ערבבי היטב עם מזלג את כל המצרכים שפכי לתבנית תנור, אפי בין 25 ל 30 דקות על 180מעלות.",
            img: "brownies.jpg",
            userId: 12,
            author: "הילה"
        },
        {
            id: 13,
            name: "אלפחורס",
            desc: "עוגיות סוכר ישראליות וקלאסיות",
            level: "קשה",
            time: "55 דקות",
            category: "עוגיות",
            ingredients: [
                "קמח",
                "סוכר",
                "ביצים",
                "קפה",
                "קפה",
                "קפה",
                "קפה"
            ],
            instructions: "ערבבי",
            img: "alfajoresCookies.jpg",
            userId: 12,
            author: "שושי"
        },
        {
            id: 14,
            name: "סופלה",
            desc: "עוגיות סוכר ישראליות וקלאסיות",
            level: "קל",
            time: "25 דקות",
            category: "עוגיות",
            ingredients: [
                "קמח",
                "סוכר",
                "ביצים",
                "קפה"
            ],
            instructions: "ערבבי",
            img: "sofle.jpg",
            userId: 12,
            author: "יהודית"
        }
    ],
    currentRecipe: null
}


//reducer:
const recipes = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            const recipeObj = action.payload;
            state.recipes.push(recipeObj);
        },
        onRecipeDetails: (state, action) => {
            const recipeId = action.payload;
            const recipe=state.recipes.find(r=>r.id===recipeId)
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
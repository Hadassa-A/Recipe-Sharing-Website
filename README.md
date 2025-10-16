# RecipeHub

## Description
RecipeHub is a React-based recipe sharing website that allows users to add, view, and save recipes.
Users can browse recipes, mark favorites, and navigate through an intuitive, responsive interface.

---

## Features
- Add new recipes with name, ingredients, and instructions
- View and filter existing recipes
- Mark recipes as favorites for easy access later
- Search recipes by name or ingredient
- Responsive design for desktop and mobile devices

---

## Project Structure
```
RecipeHub/
├─ public/
│   ├─ data/               # Static data files
│   └─ images/             # Images used in the app
├─ src/
│   ├─ app/                # App-level components and routing
│   ├─ features/
│   │   ├─ home/           # Home page features
│   │   ├─ recipes/        # Recipe-related features
│   │   └─ user/           # User-related features
│   ├─ App.css             # App-wide CSS
│   ├─ App.jsx             # Main App component
│   ├─ index.css           # Global styles
│   └─ main.jsx            # Entry point of the React app
├─ .gitignore              # Git ignore rules
├─ eslint.config.js        # ESLint configuration
├─ index.html              # Main HTML file
├─ package-lock.json       # Dependency lock file
├─ package.json            # Project dependencies and scripts
├─ README.md               # Project documentation
└─ vite.config.js          # Vite configuration
```

---

## Tools and Libraries
- React
- Vite
- CSS
- React Router
- Local Storage 

---

## Installation and Running
1. Clone the repository:
```bash
git clone https://github.com/Hadassa-A/RecipeHub.git
```

2. Navigate to the project folder and install dependencies:
```bash
cd RecipeHub
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open http://localhost:5173 in your browser to view the app.

---

## Author
Project developed by [Hadassa-A](https://github.com/Hadassa-A).

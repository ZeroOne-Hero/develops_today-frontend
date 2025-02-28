# 🍽️ Recipe Explorer

## 📌 Project Overview
**Recipe Explorer** is a React-based web application that allows users to browse, filter, and view detailed recipes from [TheMealDB API](https://www.themealdb.com/api.php). Users can search for recipes by **category, country, or ingredient**, view full recipe details, and explore related meals.

## 🚀 Features
✅ **Browse All Recipes** – Displays a list of meals from TheMealDB  
✅ **Filter Recipes** – Search by category, ingredient, or country  
✅ **View Full Recipe Details** – Instructions, ingredients, and related meals  
✅ **Clickable Ingredients & Categories** – Explore related meals easily  
✅ **Load More Recipes** – Displays additional recipes dynamically  
✅ **Responsive Design** – Works across desktop and mobile

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, React Router, Ant Design
- **State Management:** React Hooks (`useState`, `useEffect`)
- **API Handling:** Fetch API
- **Styling:** CSS Modules (Ant Design + Custom CSS)

---

## 🔧 Installation & Setup


ENV variable REACT_APP_API_URL (pass here localhost URL)


### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ZeroOne-Hero/recipe-explorer.git
cd recipe-explorer
```

### 2️⃣ Install Dependencies
```sh
npm install
# or
yarn install
```

### 3️⃣ Start the Development Server
```sh
npm start
# or
yarn start
```
Runs the app in **development mode**.  
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🌍 API Usage
This project fetches recipes from **TheMealDB API**.

### 📥 Fetching All Recipes
```ts
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
```

### 🔍 Filter by Category
```ts
fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
```

### 📌 Get Recipe Details by ID
```ts
fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
```

---

## 📂 Project Structure
```
📦 recipe-explorer-frontend
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 RecipeCard
 ┃ ┃ ┃ ┣ 📜 RecipeCard.tsx  // ✅ Recipe Card Component
 ┃ ┃ ┃ ┣ 📜 RecipeCard.css  // ✅ Styling for RecipeCard
 ┃ ┣ 📂 interfaces
 ┃ ┃ ┣ 📜 interfaces.ts  // ✅ TypeScript interfaces for API responses
 ┃ ┣ 📂 layout
 ┃ ┃ ┣ 📂 AppHeader
 ┃ ┃ ┃ ┣ 📜 AppHeader.tsx  // ✅ Header Component
 ┃ ┃ ┃ ┣ 📜 AppHeader.css  // ✅ Styling for AppHeader
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 FilteredRecipes  // ✅ Page for filtered recipes
 ┃ ┃ ┣ 📂 Home  // ✅ Homepage with all recipes
 ┃ ┃ ┣ 📂 RecipeDetails  // ✅ Detailed recipe view
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📜 api.ts  // ✅ Handles API requests
 ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📜 helpers.tsx  // ✅ Helper functions
 ┃ ┣ 📜 App.tsx  // ✅ Main App Component
 ┃ ┣ 📜 App.css  // ✅ Global CSS styles
 ┃ ┣ 📜 index.tsx  // ✅ Entry point
 ┣ 📜 .env  // ✅ Environment variables
 ┣ 📜 .gitignore  // ✅ Ignored files
 ┣ 📜 eslint.js  // ✅ Linting configuration
 ┣ 📜 package.json  // ✅ Dependencies
 ┣ 📜 package-lock.json  // ✅ Dependency lock file
 ┣ 📜 README.md  // ✅ Documentation
 ┣ 📜 tsconfig.json  // ✅ TypeScript configuration
```

---

## 🎨 Styling
### ✅ **CSS Variables for Easy Theme Customization**
Located in `index.css`:
```css
:root {
    --main-color: #e67e22;
    --hover-color: #d35400;
    --text-color: white;
    --background-color: #f8f8f8;
}
```

---

## 🛠️ Key Components
### **🔹 `Header.tsx`**
- Displays the app title **"Recipe Explorer"**
- Clickable title navigates to the **home page**

### **🔹 `Home.tsx`**
- Displays a **list of recipes**
- Allows users to **filter by category, ingredient, or country**
- Implements a **Load More Recipes** button

### **🔹 `RecipeDetail.tsx`**
- Displays **detailed recipe information**
- Lists **ingredients** (clickable to explore other recipes)
- Shows **related recipes** in the same category

### **🔹 `FilteredRecipes.tsx`**
- Displays recipes **filtered by category, country, or ingredient**
- Clicking a recipe navigates to **its details page**

---

## 🔄 Improvements & Future Features
✔️ **Add Pagination Support** – Handle large API responses  
✔️ **User Favorites** – Allow users to save recipes  
✔️ **Dark Mode** – Toggle between light & dark themes  
✔️ **Better Error Handling** – Show messages if API requests fail

---

## 📌 Author
👨‍💻 **Marina**  
🔗 **GitHub:** [https://github.com/ZeroOne-Hero](https://github.com/ZeroOne-Hero)

---

## ⭐ Contribution
Want to contribute? Fork this repo and submit a **pull request**! 🚀

---
### **📜 License**
This project is open-source under the **MIT License**. 🎉

---

🚀 **Enjoy Exploring New Recipes!** 🍽️🔥
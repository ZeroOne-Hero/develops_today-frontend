import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import RecipeDetail from "./pages/RecipeDeatails/RecipeDetails";
import "./App.css";

import { Layout } from "antd";
import FilteredRecipes from "./pages/FilteredRecipes/FilteredReceipts";
import AppHeader from "./layout/AppHeader/AppHeader";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/filtered" element={<FilteredRecipes />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

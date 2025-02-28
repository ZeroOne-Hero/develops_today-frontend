import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeById, fetchRecipes } from "../../services/api";
import { Button, Typography, Spin } from "antd";
import { formatInstructions } from "../../utils/helpers";
import "./RecipeDetails.css";

const { Title, Paragraph } = Typography;

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<any>(null);
  const [categoryRecipes, setCategoryRecipes] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchRecipeById(id).then(setRecipe);
  }, [id]);

  useEffect(() => {
    if (recipe?.strCategory) fetchRecipes("category", recipe.strCategory).then(setCategoryRecipes);
  }, [recipe]);

  const handleFilterNavigation = (filterType: string, filterValue: string) => {
    navigate(`/filtered?filterType=${filterType}&filterValue=${filterValue}`, { replace: true });
  };

  if (!recipe) return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;

  return (
      <div className="recipe-detail-container">
        <div className="recipe-content">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
          <Title className="recipe-title">{recipe.strMeal}</Title>

          <div className="recipe-buttons">
            <Button onClick={() => handleFilterNavigation("country", recipe.strArea)}>{recipe.strArea}</Button>
            <Button onClick={() => handleFilterNavigation("category", recipe.strCategory)}>{recipe.strCategory}</Button>
          </div>

          <Paragraph className="recipe-instructions">{formatInstructions(recipe.strInstructions)}</Paragraph>

          <div className="ingredients-title">Ingredients</div>
          <div className="ingredients-list">
            {Object.keys(recipe)
                .filter((key) => key.includes("Ingredient") && recipe[key])
                .map((key) => (
                    <Button key={key} className="ingredient-button" onClick={() => handleFilterNavigation("ingredient", recipe[key])}>
                      {recipe[key]}
                    </Button>
                ))}
          </div>
        </div>

        <div className="recipe-sidebar">
          <Title level={4}>More from {recipe.strCategory}</Title>
          <div className="sidebar-recipes">
            {categoryRecipes.map((catRecipe) => (
                <div key={catRecipe.idMeal} className="sidebar-recipe-item" onClick={() => navigate(`/recipe/${catRecipe.idMeal}`)}>
                  <img src={catRecipe.strMealThumb} alt={catRecipe.strMeal} className="sidebar-recipe-image" />
                  <p>{catRecipe.strMeal}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default RecipeDetail;

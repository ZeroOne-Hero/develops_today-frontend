import { useEffect, useState } from "react";
import { List, Typography, Spin } from "antd";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchRecipes } from "../../services/api";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./FilteredRecipes.css";
const { Title } = Typography;

const FilteredRecipes: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const filterType = searchParams.get("filterType");
  const filterValue = searchParams.get("filterValue");

  useEffect(() => {
    const loadFilteredRecipes = async () => {
      if (filterType && filterValue) {
        setLoading(true);
        try {
          const data = await fetchRecipes(filterType, filterValue);
          setFilteredRecipes(data);
        } catch (error) {
          console.error("Error fetching filtered recipes:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadFilteredRecipes();
  }, [filterType, filterValue]);

  const filterLabel = filterType
    ? filterType === "category"
      ? "Category"
      : filterType === "ingredient"
        ? "Ingredient"
        : filterType === "country"
          ? "Country"
          : "Filter"
    : "Unknown Filter";

  return (
    <div className="filtered-container">
      <Title className="filtered-title" level={2}>
        Recipes filtered by {filterLabel}: {filterValue}
      </Title>

      {loading ? (
        <Spin size="large" />
      ) : filteredRecipes.length === 0 ? (
        <p>
          No recipes found for {filterLabel}: {filterValue}
        </p>
      ) : (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredRecipes}
          renderItem={(recipe) => (
            <List.Item>
              <RecipeCard
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                onSelect={() => navigate(`/recipe/${recipe.idMeal}`)}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default FilteredRecipes;

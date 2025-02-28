import { useEffect, useState } from "react";
import { List, Select, Typography, Button, Spin } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchRecipes } from "../../services/api";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./Home.css";

const { Title } = Typography;
const { Option } = Select;

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const [ingredientOptions, setIngredientOptions] = useState<string[]>([]);
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const filterTypeFromURL = searchParams.get("filterType");
  const filterValueFromURL = searchParams.get("filterValue");

  useEffect(() => {
    if (filterTypeFromURL && filterValueFromURL) {
      setFilterType(filterTypeFromURL);
      setFilterValue(filterValueFromURL);
    }
  }, [filterTypeFromURL, filterValueFromURL]);

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (filterType && filterValue) {
      params.set("filterType", filterType);
      params.set("filterValue", filterValue);
      setSearchParams(params);
      navigate(`/?${params.toString()}`);

      const data = await fetchRecipes(filterType, filterValue);
      setRecipes(data);
    } else {
      setSearchParams({});
      navigate("/");
      setRecipes([]);
    }
  };

  const getFilterValues = () => {
    switch (filterType) {
      case "category":
        return [...categoryOptions];
      case "ingredient":
        return [...ingredientOptions];
      case "country":
        return [...countryOptions];
      default:
        return ["Show All"];
    }
  };

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes(
        filterType ?? undefined,
        filterValue ?? undefined,
      );
      setRecipes(data);

      const categories = new Set<string>();
      const ingredients = new Set<string>();
      const countries = new Set<string>();

      data.forEach((recipe: any) => {
        if (recipe.strCategory) categories.add(recipe.strCategory);
        for (let i = 1; i <= 50; i++) {
          if (recipe[`strIngredient${i}`])
            ingredients.add(recipe[`strIngredient${i}`]);
        }
        if (recipe.strArea) countries.add(recipe.strArea);
      });

      setCategoryOptions(Array.from(categories));
      setIngredientOptions(Array.from(ingredients));
      setCountryOptions(Array.from(countries));
    };

    loadRecipes();
  }, []);

  return (
    <div className="home-container">
      <Title className="home-title" level={2}>Recipe List</Title>

      <div className="search-container" style={{ marginBottom: 20 }}>
        <Select
          placeholder="Filter By"
          onChange={(value) => {
            setFilterType(value);
            setFilterValue("");
            setSearchParams({});
            navigate(`/?filterType=${value}`);
          }}
          style={{ width: 200, marginRight: 10 }}
          value={filterType}
        >
          <Option value="category">Category</Option>
          <Option value="ingredient">Ingredient</Option>
          <Option value="country">Country</Option>
        </Select>

        <Select
          value={filterValue}
          placeholder="Select a filter value"
          onChange={(value) => {
            setFilterValue(value);
            if (value === "Show All") {
              setSearchParams({});
              navigate("/");
            } else {
              navigate(`/?filterType=${filterType}&filterValue=${value}`);
            }
          }}
          style={{ width: 300, marginRight: 10 }}
          disabled={!filterType}
        >
          {getFilterValues().map((value) => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>

        <Button className="filter-btn" onClick={handleSearch} type="primary">
          Search
        </Button>
      </div>

      {recipes.length === 0 ? (
        <Spin size="large" />
      ) : (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={recipes}
          renderItem={(recipe) => (
            <List.Item>
              <RecipeCard
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                onSelect={(id: string) => navigate(`/recipe/${id}`)}
              />
            </List.Item>
          )}
          className="recipe-list"
        />
      )}
    </div>
  );
};

export default Home;

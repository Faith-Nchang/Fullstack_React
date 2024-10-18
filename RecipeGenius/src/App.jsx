import { useEffect, useState } from 'react';
import Card from './Components/Card';
import RecipeList from './Components/RecipeList';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const url = `https://api.spoonacular.com/recipes/complexSearch?query=food&addRecipeInformation=true&number=30&apiKey=${API_KEY}`;

import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [avgHealthScore, setAvgHealthScore] = useState(0.0);
  const [veganDiets, setVeganDiets] = useState(0);
  const [avgServings, setAvgServings] = useState(0);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        const simplifiedRecipes = data.results.map(recipe => ({
          title: recipe.title,
          healthScore: recipe.healthScore,
          servings: recipe.servings,
          pricePerServing: recipe.pricePerServing,
          image: recipe.image,
          vegetarian: recipe.vegetarian,
          timeToCook: `${recipe.readyInMinutes} minutes`
        }));

        // Set recipes and compute statistics
        setRecipes(simplifiedRecipes);
        setTotalRecipes(simplifiedRecipes.length);
        computeStatistics(simplifiedRecipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const computeStatistics = (recipes) => {
      setAvgHealthScore(calculateAverageHealthScore(recipes));
      setVeganDiets(countVegetarianDiets(recipes));
      setAvgServings(calculateAverageServings(recipes));
    };

    const calculateAverageHealthScore = (recipes) => {
      if (recipes.length === 0) return 0;
      const totalHealthScore = recipes.reduce((acc, recipe) => acc + recipe.healthScore, 0);
      return totalHealthScore / recipes.length;
    };

    const countVegetarianDiets = (recipes) => {
      return recipes.filter(recipe => recipe.vegetarian).length;
    };

    const calculateAverageServings = (recipes) => {
      if (recipes.length === 0) return 0;
      const totalServings = recipes.reduce((acc, recipe) => acc + recipe.servings, 0);
      return totalServings / recipes.length;
    };

    getRecipes();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Recipe Genius</h1>

        <Card name="Total Recipes" statistics={totalRecipes} />
        <Card name="Average Health Score" statistics={avgHealthScore.toFixed(2)} />
        <Card name="Total Vegetarian Diets" statistics={veganDiets} />
        <Card name="Average Serving Count" statistics={avgServings.toFixed(2)} />

        <RecipeList recipes={recipes} />
      </div>
    </>
  );
}

export default App;

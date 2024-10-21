import { useEffect, useState } from 'react';
import Card from './Components/Card';
import RecipeList from './Components/RecipeList';
import Sidebar from './Components/Sidebar';
import './App.css';


const API_KEY = import.meta.env.VITE_APP_API_KEY;
const url = `https://api.spoonacular.com/recipes/complexSearch?query=food&addRecipeInformation=true&number=30&apiKey=${API_KEY}`;


function App() {
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [avgHealthScore, setAvgHealthScore] = useState(0.0);
  const [veganDiets, setVeganDiets] = useState(0);
  const [avgServings, setAvgServings] = useState(0);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [diet, setDiet] = useState('all');
  const [healthScoreRange, setHealthScoreRange] = useState([0, 100]);

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
        setFilteredRecipes(simplifiedRecipes);
        computeStatistics(simplifiedRecipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    

    getRecipes();
  }, []);

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  useEffect(() => {
    const filterRecipes = () => {
      let updatedRecipes = recipes;

      // Title search
      if (search) {
        updatedRecipes = updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Dietary filter
      if (diet !== 'all') {
        updatedRecipes = updatedRecipes.filter(recipe =>
          diet === 'vegetarian' ? recipe.vegetarian : !recipe.vegetarian
        );
      }

      // Health score range filter
      updatedRecipes = updatedRecipes.filter(recipe =>
        recipe.healthScore >= healthScoreRange[0] &&
        recipe.healthScore <= healthScoreRange[1]
      );

      setFilteredRecipes(updatedRecipes);
      computeStatistics(updatedRecipes); // Move this after filtering
    };

    filterRecipes();
  }, [search, diet, healthScoreRange, recipes]);

  const computeStatistics = (recipes) => {
    setAvgHealthScore(calculateAverageHealthScore(recipes));
    setVeganDiets(countVegetarianDiets(recipes));
    setAvgServings(calculateAverageServings(recipes));
    setTotalRecipes(recipes.length);
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

  return (
    <>
      <div className="App">

        <div>
          <Sidebar />
        </div>
        <div className='main'>
        <div className="statistics">
          <Card name="Total Recipes" statistics={totalRecipes} />
          <Card name="Average Health Score" statistics={avgHealthScore.toFixed(2)} />
          <Card name="Total Vegetarian Diets" statistics={veganDiets} />
          <Card name="Average Serving Count" statistics={avgServings.toFixed(2)} />
        </div>

       

        <div className='recipe-list'>
        <div className="filters">
         
          <div className="filter-item">
            <input
              type="text"
              placeholder="Search by title"
              value={search}
              onChange={handleSearchChange}
              className="searchInput"
            />
          </div>

          <div className="filter-item">
            <label htmlFor="diet-select">Dietary Preference:</label>
            <select
              id="diet-select"
              onChange={(e) => setDiet(e.target.value)}
              value={diet}
            >
              <option value="all">All</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </select>
          </div>

          <div className="filter-item range-filter">
            <label>Health Score Range:</label>
            <div>

              <input
                type="range"
                min="0"
                max="100"
                value={healthScoreRange[0]}
                onChange={(e) => setHealthScoreRange([+e.target.value, healthScoreRange[1]])}
              />
              <span>{healthScoreRange[0]} (min)</span>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={healthScoreRange[1]}
                onChange={(e) => setHealthScoreRange([healthScoreRange[0], +e.target.value])}
              />
              <span>{healthScoreRange[1]} (max) </span>
            </div>
          </div>
        </div>

        {filteredRecipes.length > 0 ? 
          <RecipeList recipes={filteredRecipes} /> 
          : 
          <h1>No Recipes found</h1>}
      </div>
      </div>
      </div>
    </>
  );
}

export default App;

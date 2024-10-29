import { useEffect, useState } from 'react';
import Card from './Components/Card';
import RecipeList from './Components/RecipeList';
import Sidebar from './Components/Sidebar';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, PieChart, Pie } from 'recharts';

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
          timeToCook: `${recipe.readyInMinutes} minutes`,
          id: recipe.id
        }));

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

      if (search) {
        updatedRecipes = updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (diet !== 'all') {
        updatedRecipes = updatedRecipes.filter(recipe =>
          diet === 'vegetarian' ? recipe.vegetarian : !recipe.vegetarian
        );
      }

      updatedRecipes = updatedRecipes.filter(recipe =>
        recipe.healthScore >= healthScoreRange[0] &&
        recipe.healthScore <= healthScoreRange[1]
      );

      setFilteredRecipes(updatedRecipes);
      computeStatistics(updatedRecipes);
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
        <div className='outer'>
          <div className='recipe-list' id="list">
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
          <div className='visualizations'>
            <h1>Visualizations</h1>

            <h2>Recipe vs Health score</h2>
            <LineChart width={400} height={400} data={filteredRecipes} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="healthScore" stroke="#ff7300" />
              <CartesianGrid stroke="green" strokeDasharray="5 5" />
              <XAxis dataKey="title" tick={{ fill: 'white' }} />
              <YAxis tick={{ fill: 'white' }} />
              <Tooltip />
            </LineChart>
            <p>This graph displays the health scores of the recipes based on their titles. It helps to understand the nutritional value of the recipes at a glance.</p>

            <h2>Servings and time to cook</h2>
            <BarChart
              width={400}
              height={400}
              data={filteredRecipes}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="timeToCook" stackId="a" fill="blue" />
              <Bar dataKey="servings" stackId="a" fill="#82ca9d" />
            </BarChart>
            <p>This bar chart illustrates the time required to cook each recipe alongside the number of servings. It assists users in planning their cooking based on time and portion sizes.</p>

            <h2>Price per serving</h2>
            <PieChart width={400} height={400}>
              <Pie
                data={filteredRecipes.map(recipe => ({ name: recipe.title, value: recipe.pricePerServing }))}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="green"
                label
              />
              <Tooltip />
            </PieChart>
            <p>This pie chart represents the price per serving for each recipe. It allows users to easily compare the cost of different recipes and make budget-friendly choices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

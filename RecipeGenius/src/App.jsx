import { useEffect, useState } from 'react'
import Card from './Components/Card';
import RecipeList from './Components/RecipeList';

const API_KEY =   import.meta.env.VITE_APP_API_KEY


import './App.css'


const url = 'https://api.spoonacular.com/recipes/complexSearch?query=food&addRecipeInformation=true&number=30&apiKey=' + API_KEY;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(url);
      const data = await response.json();
      
      const simplifiedRecipes = data.results.map(recipe => ({
        title: recipe.title,
        healthScore: recipe.healthScore,
        servings: recipe.servings,
        pricePerServing: recipe.pricePerServing,
        image: recipe.image,
        vegetarian: recipe.vegetarian,
        timeToCook: recipe.readyInMinutes + " minutes"
    }));
    
    // Now set the simplified recipes to the state
    setRecipes(simplifiedRecipes);
      console.log(simplifiedRecipes);
    }
    getRecipes().catch(console.error);
    
    } , []);
  

  return (
    <>
      <div className="App">
        <h1>Recipe Genius</h1>
        
        <Card stastics="This is a test" />
        <RecipeList recipes={recipes} />
      </div>
       
    </>
  )
}

export default App

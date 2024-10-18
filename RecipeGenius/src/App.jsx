import { useEffect, useState } from 'react'
import Card from './Components/Card';
const API_KEY =   import.meta.env.VITE_APP_API_KEY

import './App.css'


const url = 'https://api.spoonacular.com/recipes/complexSearch?query=food&addRecipeInformation=true&number=30&apiKey=' + API_KEY;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data.results);
      console.log(data.results);
    }
    getRecipes().catch(console.error);
    
    } , []);
  

  return (
    <>
      <div className="App">
        <h1>Recipe Genius</h1>
        
        <Card stastics="This is a test" />
      </div>
       
    </>
  )
}

export default App

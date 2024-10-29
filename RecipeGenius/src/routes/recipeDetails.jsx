import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import './recipe.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        // Fetch the recipe details from an API or data source
        const fetchRecipe = async () => {
            const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`
            try {
                const response = await fetch(url);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container-sec'>
            <div>
                <Sidebar />
            </div>
            <div className='main-sec'>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
                <p>Ready in {recipe.readyInMinutes} minutes</p>
                <p>Cooking time: {recipe.cookingMinutes} minutes</p>
                <p>Preparation time: {recipe.preparationMinutes} minutes</p>
                <p>Servings: {recipe.servings}</p>
                <p>Price per serving: ${recipe.pricePerServing}</p>
                <p>Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}</p>
                <p>Source: <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">{recipe.sourceName}</a></p>
                <p>Summary: {recipe.summary}</p>
                <h2>Ingredients</h2>
                <ul>
                    {recipe.extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
                {/* <h2>Wine Pairing</h2> */}
                {/* <p>{recipe.winePairing.pairingText}</p> */}
                {/* <ul>
                    {recipe.winePairing.pairedWines.map((wine, index) => (
                        <li key={index}>{wine}</li>
                    ))}
                </ul> */}
                {/* {recipe.winePairing.productMatches.length > 0 && (
                    <div>
                        <h3>Recommended Wine</h3>
                        <div>
                            <img src={recipe.winePairing.productMatches[0].imageUrl} alt={recipe.winePairing.productMatches[0].title} style={{ width: '100px' }} />
                            <p>{recipe.winePairing.productMatches[0].title}</p>
                            <p>{recipe.winePairing.productMatches[0].description}</p>
                            <p>Price: {recipe.winePairing.productMatches[0].price}</p>
                            <a href={recipe.winePairing.productMatches[0].link} target="_blank" rel="noopener noreferrer">Buy Now</a>
                        </div>
                    </div>
                )} */}
                <p>Health score: {recipe.healthScore}</p>
                <p>Weight Watcher SmartPoints: {recipe.weightWatcherSmartPoints}</p>
                <p>Instructions: {recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetails;
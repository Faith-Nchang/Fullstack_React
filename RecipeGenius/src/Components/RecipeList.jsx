const RecipeList = ({ recipes }) => {
    return (
        <div className="list">
            <table>
            <thead>
                <tr className="recipeHeader">
                    <th>Recipe Name</th>
                    <th>Health Score</th>
                    <th>Servings</th>
                    <th>Price Per Serving</th>
                    <th>Vegetarian</th>
                    <th>Time to Cook</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe, index) => (
                    <tr key={index} className="recipe">
                        <td>{recipe.title}</td>
                        <td>{recipe.healthScore}</td>
                        <td>{recipe.servings}</td>
                        <td>{recipe.pricePerServing}</td>
                        <td>{recipe.vegetarian ? 'Yes' : 'No'}</td>
                        <td>{recipe.timeToCook}</td>
                        <td>
                            <img src={recipe.image} alt={recipe.title} style={{ width: '100px' }} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    )
}; // End of RecipeList

export default RecipeList; // Export RecipeList
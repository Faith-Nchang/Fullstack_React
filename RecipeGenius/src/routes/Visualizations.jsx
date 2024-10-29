import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from 'recharts';

import './recipe.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const url = `https://api.spoonacular.com/recipes/complexSearch?query=food&addRecipeInformation=true&number=30&apiKey=${API_KEY}`;

const Visualizations = () => {
  const [recipes, setRecipes] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [selectedVisualization, setSelectedVisualization] = useState('line'); // New state for selected visualization

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();

        // Set recipes and compute statistics
        setRecipes(data.results);
        const info1 = data.results.map(recipe => ({
          name: recipe.title,
          healthScore: recipe.healthScore
        }));
        setData1(info1);

        const info2 = data.results.map(recipe => ({
          name: recipe.title,
          servings: recipe.servings,
          timeToCook: recipe.readyInMinutes
        }));
        setData2(info2);

        const info3 = data.results.map(recipe => ({
          name: recipe.title,
          value: recipe.pricePerServing // Adjust this key to `value`
        }));
        setData3(info3);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getRecipes();
  }, []);

  // Display loading message if data1 is empty
  if (data1.length === 0) {
    return <div>Loading...</div>;
  }

  // Function to get descriptive content based on the selected visualization
  const getDescription = () => {
    switch (selectedVisualization) {
      case 'line':
        return (
          <div>
            <p>This line chart visualizes the relationship between the recipe titles and their corresponding health scores. A higher health score indicates a more nutritious recipe. You can identify trends and see which recipes offer better health benefits.</p>
          </div>
        );
      case 'bar':
        return (
          <div>
            <p>The bar chart compares the number of servings and the time required to cook various recipes. This helps you understand which recipes are more time-efficient and how they vary in portion sizes.</p>
          </div>
        );
      case 'pie':
        return (
          <div>
            <p>This pie chart illustrates the distribution of the price per serving for different recipes. It provides insights into which recipes are more economical versus those that might be more expensive, helping you make informed decisions based on your budget.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-sec">
      <Sidebar />
      <div className="main-sec">
        <h1>Visualizations</h1>

        {/* Toggle Buttons */}
        <div className="toggle-buttons">
          <button onClick={() => setSelectedVisualization('line')}>Line Chart</button>
          <button onClick={() => setSelectedVisualization('bar')}>Bar Chart</button>
          <button onClick={() => setSelectedVisualization('pie')}>Pie Chart</button>
        </div>

        {/* Conditional Rendering of Charts based on the selected visualization */}
        {selectedVisualization === 'line' && (
          <>
            <h2>Recipe vs Health Score</h2>
            <LineChart width={800} height={400} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="healthScore" stroke="#ff7300" />
              <CartesianGrid stroke="green" strokeDasharray="5 5" />
              <XAxis dataKey="name" tick={{ fill: 'white' }} />
              <YAxis tick={{ fill: 'white' }} />
              <Tooltip />
            </LineChart>
            {getDescription()} {/* Render description for Line Chart */}
          </>
        )}

        {selectedVisualization === 'bar' && (
          <>
            <h2>Servings and Time to Cook</h2>
            <BarChart
              width={900}
              height={400}
              data={data2}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="timeToCook" stackId="a" fill="blue" />
              <Bar dataKey="servings" stackId="a" fill="#82ca9d" />
            </BarChart>
            {getDescription()} {/* Render description for Bar Chart */}
          </>
        )}

        {selectedVisualization === 'pie' && (
          <>
            <h2>Price per Serving</h2>
            <PieChart width={1000} height={400}>
              <Pie
                data={data3}
                dataKey="value" // Use the value for the pie chart
                nameKey="name" // Use name as label
                cx="50%"
                cy="50%"
                outerRadius={200}
                fill="green"
                label
              />
              <Tooltip />
            </PieChart>
            {getDescription()} {/* Render description for Pie Chart */}
          </>
        )}
      </div>
    </div>
  );
}

export default Visualizations;

// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import RecipeDetails from './routes/recipeDetails.jsx';
import Visualizations from './routes/Visualizations.jsx';
import AboutS from './routes/About.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home route */}
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} /> {/* Dynamic route */}
        <Route path="/visualizations" element={<Visualizations />} /> {/* Visualizations route */}
        <Route path="/about" element={<AboutS />} /> {/* About route */}
      </Routes>
    </Router>
  </StrictMode>,
);

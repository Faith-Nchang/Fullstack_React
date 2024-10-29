import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';
import CoinDetail from './routes/CoinDetail';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
      </Route>
  </Routes>
</BrowserRouter>
)

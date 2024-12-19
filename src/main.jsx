import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

// Render the app inside BrowserRouter with base URL set to '/home'
createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/'>   {/* Add the base URL here */}
      <App />
    </BrowserRouter>
);

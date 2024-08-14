import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot function
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

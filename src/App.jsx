import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './pages/login';
import Dashboard from './pages/dashboard'; // Ensure this path is correct

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;

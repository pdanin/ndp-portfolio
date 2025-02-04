import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/index.jsx';
import LearnrPage from './pages/learnrpage/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/learnrsg" element={<LearnrPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
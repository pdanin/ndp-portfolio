import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/index.jsx';
import WebDevPage from './pages/web-development/index.jsx';
import InvitesPage from './pages/graphic-design/invites/index.jsx';
import GaragePage from './pages/graphic-design/garage/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/web-development" element={<WebDevPage />} />
        <Route path="/graphic-design/garage" element={<GaragePage />} />
        <Route path="/graphic-design/invites" element={<InvitesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
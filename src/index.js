import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/index.jsx';
import InvitesPage from './pages/graphic-design/invites/index.jsx';
import GaragePage from './pages/graphic-design/garage/index.jsx';
import CustomButton from './components/common/CustomButton.jsx';
import { Box, Typography } from '@mui/material';
import SchoolProjPage from './pages/web-development/school-projects/index.jsx';
import LearnrPage from './pages/web-development/learnr/index.jsx';
import ScrollToTop from './components/common/ScrollTop.jsx';

const App = () => {
  const [showWarning, setShowWarning] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setShowWarning(window.innerWidth < 600);
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Run once on mount in case screen width is initially small
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showWarning && (
        <Box style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.8)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 9999,
        }}>
          <Box sx = {{width: "80%"}}>
            <Typography variant="h4">⚠️ Responsiveness Optimization ⚠️</Typography>
            <Typography variant="body2">This app is not optimized for mobile devices. Please use a device with a larger screen for the best experience.</Typography>
            <CustomButton 
              onClick={() => setShowWarning(false)} 
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                marginTop: "10px",
                cursor: "pointer",
                background: "#FF5757",
                border: "none",
                color: "white",
                borderRadius: "5px"
              }}
            >
              Proceed Anyway
            </CustomButton>
          </Box>
        </Box>
      )}

      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/ndp-portfolio/" element={<Homepage />} />
          <Route path="/web-development/school-projects" element={<SchoolProjPage />} />
          <Route path="/web-development/learnr" element={<LearnrPage />} />
          <Route path="/graphic-design/garage" element={<GaragePage />} />
          <Route path="/graphic-design/invites" element={<InvitesPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
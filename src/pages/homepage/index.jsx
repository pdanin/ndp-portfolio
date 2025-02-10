import React from 'react';
import reportWebVitals from './reportWebVitals';
import Theme from '../../components/providers/ThemeProvider';
import { ThemeProvider } from '@mui/material';
import HomepageHeader from '../../components/common/Header';
import HeroSection from '../../components/common/homepage-sections/hero';
import AboutSection from '../../components/common/homepage-sections/about';
import FeaturedSection from '../../components/common/homepage-sections/featured-work';
import { useRef, useEffect } from 'react';
import Footer from '../../components/common/Footer';

export default function Homepage() {
  const featuredRef = useRef(null);
  
  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("scrollToFeatured") === "true") {
      sessionStorage.removeItem("scrollToFeatured"); 
      setTimeout(() => {
        if (featuredRef.current) {
          featuredRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); 
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <HomepageHeader 
      scrollToFeatured={scrollToFeatured} 
      />
      <HeroSection />
      <AboutSection />
      <FeaturedSection 
      ref={featuredRef}
      />
      <Footer />
    </ThemeProvider>
  )
}

reportWebVitals();

import React from 'react';
import reportWebVitals from './reportWebVitals';
import Theme from '../../components/providers/ThemeProvider';
import { ThemeProvider } from '@mui/material';
import HomepageHeader from '../../components/common/Header';
import HeroSection from '../../components/common/homepage-sections/hero';
import AboutSection from '../../components/common/homepage-sections/about';
import FeaturedSection from '../../components/common/homepage-sections/featured-work';

export default function Homepage() {

  return (
    <ThemeProvider theme={Theme}>
      <HomepageHeader />
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
    </ThemeProvider>
  )
}

reportWebVitals();

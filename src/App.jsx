import { useState } from 'react'

import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from './components/HeroSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Material-UI's default blue
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
    </ThemeProvider>
  );
}


export default App

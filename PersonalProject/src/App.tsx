import React, { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './Components/Appbar/appbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // blue color
    },
    background: {
      default: '#ffffff', // light background color
    },
    text: {
      primary: '#000000', // black text color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // a darker shade of blue
    },
    background: {
      default: '#303030', // dark background color
    },
    text: {
      primary: '#ffffff', // white text color
    },
  },
});

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light'); // Track theme mode

  // Callback function to handle theme mode changes
  const handleThemeChange = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${themeMode}`}>
        <ResponsiveAppBar onThemeChange={handleThemeChange} themeMode={'light'} />
        <div id="TitleStatement">
          <h1>Hi, I'm Alex.</h1>
          <h1>Finance, Coding, Quant.</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

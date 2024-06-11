import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './Components/Appbar/appbar';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import darkProfilePicture from './Components/WebsitePhoto.png';
import lightProfilePicture from './Components/WebsitePhotoColored.png';
import Paper from '@mui/material/Paper';
import AWScert from './Components/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png';
import SolutionsCert from './Components/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png';
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
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark'); // Track theme mode

  // Callback function to handle theme mode changes
  const handleThemeChange = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${themeMode}`}>
        <ResponsiveAppBar onThemeChange={handleThemeChange} themeMode={themeMode} />
        <div id="TitleStatement">
          <div>
            <h1>Hi, I'm Alex.</h1>
            <h1>Fintech, ML, Software.</h1>
          </div>
          <img src={themeMode === 'light' ? lightProfilePicture : darkProfilePicture} alt="profilePicture" />
        </div>
        <div id="Introduction">
          <p>I'm a 20-year-old college student deeply intrigued by the realm of Machine Learning.</p>
          <p> Combining my love for finance with my fascination for technology, I'm on a quest to unravel the usage of machine learning for finance.</p>
        </div>
        <div id="Certifications">
          <h1>Here are some of my certifications</h1>
        </div>
        <Paper id="paper" elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default }}>
          <p style={{ color: theme.palette.text.primary }}>
            I am committed to continuously expanding my knowledge and skills in software and AI to stay at the forefront of technological innovation.
          </p>
          <div id="certs">
          <img src={themeMode === 'light' ? AWScert : AWScert} alt="AWScertImage" />
          <img src={themeMode === 'light' ? SolutionsCert : SolutionsCert} alt="AWScertImage" />
          </div>
        </Paper>
        <div><p>sdsdsd</p></div>
      </div>
    </ThemeProvider>
  );
}

export default App;

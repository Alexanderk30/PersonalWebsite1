import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './Components/Appbar/appbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import darkProfilePicture from './Components/WebsitePhoto.png';
import lightProfilePicture from './Components/WebsitePhotoColored.png';

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
        <ResponsiveAppBar onThemeChange={handleThemeChange} themeMode={'light'} />
        <div id="TitleStatement">
          <div>
            <h1>Hi, I'm Alex.</h1>
            <h1>Finance, Coding, Quant.</h1>
          </div>
          <img src={themeMode === 'light' ? lightProfilePicture : darkProfilePicture}
            alt="profilePicture" />
        </div>
        <div id="Introduction">
          <p>I'm a 20-year-old college student deeply intrigued by the realm of quantitative software.</p>
          <p> Combining my love for finance with my fascination for technology, I'm on a quest to unravel the intricacies of algorithms for finance.</p>
        </div>
        <div id = "Certifications">
          <h1>Here are some of my certifications</h1>
        </div>
        <div id = "certBox1">
          <p>sdsdd</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

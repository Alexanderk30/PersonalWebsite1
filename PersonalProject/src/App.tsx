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
        {/* <div id="Certifications">
          <h1>Here are some of my certifications</h1>
        </div> */}
        {/* <Paper id="paper" elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default }}>
          <p style={{ color: theme.palette.text.primary }}>
            I am committed to continuously expanding my knowledge and skills in software and AI to stay at the forefront of technological innovation.
          </p>
          <div id="certs">
          <img src={themeMode === 'light' ? AWScert : AWScert} alt="AWScertImage" />
          <img src={themeMode === 'light' ? SolutionsCert : SolutionsCert} alt="AWScertImage" />
          </div>
        </Paper> */}
        <div id= "projects"><h1>Projects</h1></div>
        <Paper id="projectCard" elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default }}>
        <h2 style={{ color: theme.palette.text.primary }}>
          Medical College Admissions Test (MCAT) Study Planner. (December 2023 - May 2024)</h2>
          <p style={{ color: theme.palette.text.primary }}> Solo Developer | React, HTML, CSS, Typescript</p>
          <p style={{ color: theme.palette.text.primary }}>- Designed and developed a comprehensive MCAT study schedule creator allowing students preparing for the Medical College Admissions Test to create an easy to use and personalized plan in which they could use to study.</p>
          <p style={{ color: theme.palette.text.primary }}>- Utilized React framework with TypeScript for the front-end development, ensuring a user-friendly interface with dynamic and responsive elements.</p>
          <p style={{ color: theme.palette.text.primary }}>- Implemented CSS for styling, enhancing the visual appeal and usability of the website</p>
          <p style={{ color: theme.palette.text.primary }}>- https://github.com/Alexanderk30/mcat-website</p>
        </Paper>
        <Paper id="projectCard1" elevation={3} style={{ padding: '20px', backgroundColor: theme.palette.background.default }}>
        <h2 style={{ color: theme.palette.text.primary }}>
          Stock Price Prediction Machine Learning Model. (May 2024 - June 2024)</h2>
          <p style={{ color: theme.palette.text.primary }}> Solo Developer | Python, Flask, Pandas, scikit-learn, plotly, HTML, CSS, JavaScript, Jinja2</p>
          <p style={{ color: theme.palette.text.primary }}>- Developed a machine learning-based web application for predicting stock prices using historical data. The application enables users to input stock data and receive predictions, along with a visual representation of the data.</p>
          <p style={{ color: theme.palette.text.primary }}>- Utilized scikit-learn to train a linear regression model for stock price prediction based on historical stock data (Open, High, Low, Close, Volume).</p>
          <p style={{ color: theme.palette.text.primary }}>- Integrated Plotly to generate and display interactive graphs of stock data within the web application.</p>
          <p style={{ color: theme.palette.text.primary }}>- Employed Pandas for data preprocessing, including handling missing values and scaling features with StandardScaler.</p>
          <p style={{ color: theme.palette.text.primary }}>- Created RESTful API endpoints to handle data input and return predictions in real-time.</p>
          <p style={{ color: theme.palette.text.primary }}>- https://github.com/Alexanderk30/Stock-Trading-AI</p>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;

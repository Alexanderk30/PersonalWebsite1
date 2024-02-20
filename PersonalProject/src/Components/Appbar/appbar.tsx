import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface AppBarProps {
  onThemeChange: () => void;
  themeMode: 'light' | 'dark';
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#56018D', // purple color
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

const ResponsiveAppBar: React.FC<AppBarProps> = ({ onThemeChange, themeMode }) => {
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} className={themeMode}>
        <AppBar position="static" color={themeMode === 'light' ? 'primary' : 'default'}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <IconButton color="inherit" onClick={onThemeChange}>
              {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default ResponsiveAppBar;

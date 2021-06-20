import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const values = {
  xs: 0,
  sm: 800,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const MuiProvider = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e91e63',
        light: '#5b84ad',
        dark: '#23476b',
      },
      secondary: {
        main: '#40CF9F',
        light: '#5bd6ad',
        dark: '#238e6b',
      },
      cardbackground: 'rgba(255, 255, 255, 0.7)',
      cardbackgroundfilter: 'blur(250px)',
      error: red,
    },
    typography: {
  
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    shape: {
      borderRadius: 4,
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      up: (key) => `@media (min-width:${values[key]}px)`,
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiProvider;
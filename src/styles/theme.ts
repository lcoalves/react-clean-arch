import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC600',
    },
    secondary: {
      main: '#D1D2D4',
    },
    error: {
      main: '#CA3C3C',
    },
    success: {
      main: '#109853',
    },
    warning: {
      main: '#E67A00',
    },
    info: {
      main: '#17305A',
    },
    background: {
      default: '#282829',
      paper: '#58585B',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'TT Display',
      fontSize: '4rem',
      fontWeight: 'normal',
    },
    h2: {
      fontFamily: 'Capitana',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Capitana',
      fontSize: '1.8rem',
      fontWeight: 'normal',
    },
    h4: {
      fontFamily: 'Capitana',
      fontSize: '1.6rem',
      fontWeight: 'normal',
    },
    h5: {
      fontFamily: 'Capitana',
      fontSize: '1.4rem',
      fontWeight: 'normal',
    },
    h6: {
      fontFamily: 'Capitana',
      fontSize: '1.2rem',
      fontWeight: 'normal',
    },
    body1: {
      fontFamily: 'Capitana',
      fontSize: '1.2rem',
      fontWeight: 'normal',
    },
    body2: {
      fontFamily: 'Capitana',
      fontSize: '1.4rem',
      fontWeight: 'normal',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
        },
      },
    },
  },
});

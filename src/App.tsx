import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';

import { Routes } from './Routes';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

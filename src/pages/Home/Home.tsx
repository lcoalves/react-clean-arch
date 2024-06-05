import React from 'react';

import { useStore } from 'effector-react';

import { Box, Typography, Button } from '@mui/material';

import LoginStore from 'stores/LoginStore/LoginStore';

import { containerStyles, contentStyles } from './Home.styles';

export default function Home(): JSX.Element {
  const { id, email } = useStore(LoginStore);

  return (
    <Box sx={containerStyles}>
      <Box sx={contentStyles}>
        <Typography variant="h1">Home page</Typography>
        <Typography>{id}</Typography>
        <Typography>{email}</Typography>
        <Button variant="contained" disableElevation size="large" fullWidth>
          Sair
        </Button>
      </Box>
    </Box>
  );
}

import React from 'react';
import { useForm } from 'react-hook-form';

import { useStore } from 'effector-react';

import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';

import LoginUseCase from 'useCases/LoginUseCase/LoginUseCase';

import LoginStore from 'stores/LoginStore/LoginStore';

import { containerStyles, formStyles } from './Login.styles';

type FormValues = {
  email: string;
  password: string;
};

export default function Login(): JSX.Element {
  const { isLoading } = useStore(LoginStore);

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data) {
    LoginUseCase.execute(data);
  }

  return (
    <Box sx={containerStyles}>
      <Box sx={formStyles} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Boas vindas!</Typography>
        <TextField
          {...register('email')}
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite aqui seu e-mail"
          size="small"
        />
        <TextField
          {...register('password')}
          id="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          size="small"
        />
        <LoadingButton
          loading={isLoading}
          variant="contained"
          disableElevation
          size="large"
          fullWidth
          type="submit"
        >
          Entrar
        </LoadingButton>
      </Box>
    </Box>
  );
}

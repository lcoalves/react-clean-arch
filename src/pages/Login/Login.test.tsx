import React from 'react';
import { useTranslation } from 'react-i18next';

import { render } from '@testing-library/react';

import { loadExample } from 'stores/ExampleStore/ExampleEvents';

import Login from './Login';

jest.mock('react-i18next');
jest.mock('useCases/ExampleUseCase/LoadExamplePageUseCase');

describe('Login Page', () => {
  beforeEach(() => {
    mockTranslation(useTranslation as jest.Mock);
  });

  it('should render the Login successfully', () => {
    render(<Login />);
  });

  it('should render the Login successfully when isLoading', () => {
    loadExample();
    render(<Login />);
  });
});

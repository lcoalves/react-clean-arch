import React from 'react';
import { useTranslation } from 'react-i18next';

import { render } from '@testing-library/react';

import { loadExample } from 'stores/ExampleStore/ExampleEvents';

import Home from './Home';

jest.mock('react-i18next');
jest.mock('useCases/ExampleUseCase/LoadExamplePageUseCase');

describe('Home Page', () => {
  beforeEach(() => {
    mockTranslation(useTranslation as jest.Mock);
  });

  it('should render the Home successfully', () => {
    render(<Home />);
  });

  it('should render the Home successfully when isLoading', () => {
    loadExample();
    render(<Home />);
  });
});

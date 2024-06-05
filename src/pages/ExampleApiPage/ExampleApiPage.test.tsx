import React from 'react';
import { useTranslation } from 'react-i18next';

import { render } from '@testing-library/react';

import { loadExample } from 'stores/ExampleStore/ExampleEvents';

import ExampleApiPage from './ExampleApiPage';

jest.mock('react-i18next');
jest.mock('useCases/ExampleUseCase/LoadExamplePageUseCase');

describe('ExampleApiPage', () => {
  beforeEach(() => {
    mockTranslation(useTranslation as jest.Mock);
  });

  it('should render the ExampleApiPage successfully', () => {
    render(<ExampleApiPage />);
  });

  it('should render the ExampleApiPage successfully when isLoading', () => {
    loadExample();
    render(<ExampleApiPage />);
  });
});

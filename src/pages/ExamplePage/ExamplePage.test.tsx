import React from 'react';

import { render } from '@testing-library/react';

import ExamplePage from './ExamplePage';

describe('ExamplePage', () => {
  it('should render the ExamplePage successfully', () => {
    render(<ExamplePage />);
  });
});

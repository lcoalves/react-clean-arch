import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { Routes } from './Routes';

describe('Router', () => {
  it('should render example route', () => {
    const exampleRoute = '/';
    const exampleApiRoute = '/api';
    render(
      <MemoryRouter initialEntries={[exampleRoute, exampleApiRoute]}>
        <Routes />
      </MemoryRouter>,
    );
  });
});

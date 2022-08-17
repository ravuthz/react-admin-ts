import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';

// import AdminLayout from './AdminLayout';

describe('<AdminLayout />', () => {
  afterEach(cleanup);

  test('renders', () => {
    // render(<AdminLayout />, { wrapper: MemoryRouter })
    // const page: HTMLElement = screen.getByTestId('AdminLayout');
    // expect(page).toBeInTheDocument();
  });
});

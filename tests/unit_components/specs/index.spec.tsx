import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@modules/components';

test('displays header', () => {
  render(
    <Header
      onLogin={() => 0}
      onLogout={() => 0}
      onCreateAccount={() => 0}
    />,
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Acme');
});

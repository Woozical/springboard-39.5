import React from 'react';
import Card from './Card';
import { render } from '@testing-library/react';

// smoke test
it("renders properly", function() {
  render(<Card />);
});

// snapshot test
it("matches snapshot", function() {
  const r = render(<Card />);
  expect(r.asFragment()).toMatchSnapshot();
});
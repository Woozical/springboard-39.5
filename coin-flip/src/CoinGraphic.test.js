import {render} from '@testing-library/react';
import CoinGraphic from './CoinGraphic';

// smoke test
it("should render without exploding", () => {
  render(<CoinGraphic />)
});
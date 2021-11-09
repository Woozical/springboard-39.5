import {render} from '@testing-library/react';
import CoinFlipper from './CoinFlipper';

// smoke test
it("should render without exploding", () => {
  render(<CoinFlipper />);
});
import { useState } from "react";
import CoinGraphic from "./CoinGraphic";

const CoinFlipper = () => {
  const [flips, updateFlips] = useState({total: 0, heads: 0, tails: 0, current: null});

  const newFlip = () => {
    const roll = Math.random();
    const updated = {...flips};
    updated.total += 1;
    if (roll < 0.5){
      updated.heads += 1;
      updated.current = 0;
    } else {
      updated.tails += 1;
      updated.current = 1;
    }
    updateFlips(updated);
  }

  return (<div>
    <h1>Let's flip a coin!</h1>
    <CoinGraphic display={flips.current} />
    <button onClick={newFlip}>FLIP ME!!!</button>
    <p>{`Out of ${flips.total} flips, there have been ${flips.heads} heads and ${flips.tails} tails.`}</p>
  </div>)
}

export default CoinFlipper;
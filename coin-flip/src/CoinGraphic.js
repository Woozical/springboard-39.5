import './CoinGraphic.css';

const CoinGraphic = (props) => {
  if (props.display === null) return <></>;

  const crop = {
    backgroundPosition: `-${400 * props.display}px 0px`
  }
  return <div className="CoinGraphic" style={crop}>
  </div>
}

export default CoinGraphic;
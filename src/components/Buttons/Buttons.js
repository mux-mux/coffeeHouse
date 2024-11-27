import { Link } from 'react-router-dom';
import './Buttons.scss';

const BUTTONS = {
  more: (
    <Link to="/ourCoffee" className="cta">
      More
    </Link>
  ),
  buy: <button className="button-buy">Buy</button>,
};

function Buttons({ forType = 'buy' }) {
  const buttonType = BUTTONS[forType];

  return <>{buttonType}</>;
}

export default Buttons;

import { Link } from 'react-router-dom';
import './Buttons.scss';

const BUTTONS = {
  more: (
    <Link
      to="/ourCoffee"
      className="button button-outline button-outline-more button-lg"
    >
      More
    </Link>
  ),
  buy: <button className="button button-fill button-lg">Buy</button>,
};

function Buttons({ forType = 'buy' }) {
  const buttonType = BUTTONS[forType];

  return <>{buttonType}</>;
}

export default Buttons;

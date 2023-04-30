import { Link } from 'react-router-dom';
import './Buttons.css';

function Buttons() {
  return (
    <>
      <Link to="/ourCoffee" className="cta">
        More
      </Link>
    </>
  );
}

export default Buttons;

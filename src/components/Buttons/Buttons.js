import { Link } from 'react-router-dom';
import './Buttons.scss';

function Buttons({ variant = 'button', children, ...delegated }) {
  let Component;

  if (variant === 'link') {
    Component = (
      <Link to={delegated.to} className={delegated.className}>
        {children}
      </Link>
    );
  } else if (variant === 'button') {
    Component = (
      <button
        className={delegated.className}
        onClick={() => delegated.onClick()}
      >
        {children}
      </button>
    );
  }

  return <>{Component}</>;
}

export default Buttons;

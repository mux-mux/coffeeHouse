import { Link } from 'react-router-dom';
import './Buttons.scss';

function Buttons({
  as,
  variant = 'white',
  size = 'md',
  children,
  ...delegated
}) {
  const classes = `button button-${variant} button-${size}`;

  if (as === 'a') {
    return (
      <Link to={delegated.to} className={classes}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={classes} onClick={() => delegated.onClick()}>
        {children}
      </button>
    );
  }
}

export default Buttons;

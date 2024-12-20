import { Link } from 'react-router-dom';
import './Button.scss';

function Button({
  as,
  variant = 'white',
  size = 'md',
  children,
  ...delegated
}) {
  const classes = `button button-${variant} button-${size}${
    delegated.className ? ` ${delegated.className}` : ''
  }`;

  if (as === 'a') {
    return (
      <Link to={delegated.to} className={classes}>
        {children}
      </Link>
    );
  } else if (as === 'submit') {
    return (
      <button type="submit" className={classes} {...delegated}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={classes} onClick={() => delegated.onClick()}>
        {children}
      </button>
    );
  }
}

export default Button;

import './Heading.scss';

function Heading({ as, children, className }) {
  const Component = as;
  return (
    <Component className={`${as}${className ? ` ${className}` : ''}`}>
      {children}
    </Component>
  );
}

export default Heading;

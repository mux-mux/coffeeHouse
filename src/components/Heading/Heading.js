import './Heading.scss';

function Heading({ as, children, ...delegated }) {
  const Component = as;
  return <Component {...delegated}>{children}</Component>;
}

export default Heading;

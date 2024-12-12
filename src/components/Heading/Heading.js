import './Heading.scss';

function Heading({ as, children, delegated }) {
  const Component = as;
  return (
    <Component className="section__header" {...delegated}>
      {children}
    </Component>
  );
}

export default Heading;

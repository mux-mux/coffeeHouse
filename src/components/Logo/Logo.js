import './Logo.scss';

function Logo({ color }) {
  return (
    <>
      <img
        src={'./resources/logo/Logo_' + color + '.png'}
        width="35"
        height="35"
        alt="return to homepage"
        className="logo"
      />
    </>
  );
}

export default Logo;

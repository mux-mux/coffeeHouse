import './Logo.scss';

function Logo({ color }) {
  return (
    <>
      <img
        src={'./resources/logo/Logo_' + color + '.png'}
        alt="return to homepage"
        className="logo"
      />
    </>
  );
}

export default Logo;

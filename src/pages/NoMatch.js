import { Link, useLocation } from 'react-router-dom';

function NoMatch() {
  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p style={{ margin: '20px 0' }}>
        No match for <code>{location.pathname}</code>
      </p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007BFF' }}>
        Go to Home
      </Link>
    </div>
  );
}

export default NoMatch;

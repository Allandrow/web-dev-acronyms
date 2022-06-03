import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Error from '@common';

function Layout() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary FallbackComponent={Error} onReset={() => navigate('/')}>
      <p>Body</p>
    </ErrorBoundary>
  );
}

export default Layout;

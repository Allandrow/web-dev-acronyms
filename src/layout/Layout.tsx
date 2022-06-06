import { Outlet } from 'react-router-dom';
import ErrorQueryBoundary from './ErrorQueryBoundary';

function Layout() {
  return (
    <ErrorQueryBoundary>
      <Outlet />
    </ErrorQueryBoundary>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';
import { ErrorQueryBoundary } from '@layout';

function Layout() {
  return (
    <ErrorQueryBoundary>
      <Outlet />
    </ErrorQueryBoundary>
  );
}

export default Layout;

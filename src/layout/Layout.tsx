import { Outlet } from 'react-router-dom';
import { ErrorQueryBoundary } from '@layout';
import { Suspense } from 'react';

function Layout() {
  return (
    <ErrorQueryBoundary>
      <Suspense fallback={<h2>Loading…</h2>}>
        <Outlet />
      </Suspense>
    </ErrorQueryBoundary>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';
import { ErrorQueryBoundary } from '@layout';
import { Suspense } from 'react';
import { Footer, Header } from '@common';

function Layout() {
  return (
    <ErrorQueryBoundary>
      <Suspense fallback={<h2>Loading…</h2>}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </ErrorQueryBoundary>
  );
}

export default Layout;

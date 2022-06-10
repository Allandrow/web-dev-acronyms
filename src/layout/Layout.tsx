import { Outlet } from 'react-router-dom';
import { ErrorQueryBoundary } from '@layout';
import { Suspense } from 'react';
import { Footer, Header } from '@common';

function Layout() {
  return (
    <ErrorQueryBoundary>
      <div className="bg-dark h-screen text-white">
        <Suspense fallback={<h2>Loading…</h2>}>
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
      </div>
    </ErrorQueryBoundary>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';
import { ErrorQueryBoundary } from '@layout';
import { Suspense } from 'react';
import { Footer, Header } from '@common';

function Layout() {
  return (
    <div className="h-screen flex flex-col max-w-7xl m-auto">
      <ErrorQueryBoundary>
        <Suspense fallback={<h2>Loading…</h2>}>
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
      </ErrorQueryBoundary>
    </div>
  );
}

export default Layout;

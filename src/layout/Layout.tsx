import { Footer, Form, Header, Hero } from '@common';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorQueryBoundary } from '@layout';

function Layout() {
  return (
    <div className="h-screen flex flex-col max-w-7xl m-auto">
      <Header />
      <main className="flex flex-col flex-1 gap-16">
        <ErrorQueryBoundary>
          <section>
            <Hero />
            <Form />
          </section>
          <Suspense fallback={<h2>Loading…</h2>}>
            <Outlet />
          </Suspense>
        </ErrorQueryBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

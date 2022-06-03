import ErrorQueryBoundary from './ErrorQueryBoundary';

function Layout() {
  return (
    <ErrorQueryBoundary>
      <p>Body</p>
    </ErrorQueryBoundary>
  );
}

export default Layout;

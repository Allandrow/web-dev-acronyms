import { FallbackProps } from 'react-error-boundary';

function Error({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <main>
      <h1>Something went wrong…</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary} type="button">
        Return to the homepage
      </button>
    </main>
  );
}

export default Error;

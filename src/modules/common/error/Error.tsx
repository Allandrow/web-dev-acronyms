import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

function Error({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    resetErrorBoundary();
    navigate('/', { replace: true });
  };

  return (
    <section>
      <h1>Something went wrong…</h1>
      <p>{error.message}</p>
      <button onClick={handleClick} type="button">
        Return to the homepage
      </button>
    </section>
  );
}

export default Error;

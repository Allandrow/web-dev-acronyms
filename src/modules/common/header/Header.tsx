import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4">
      <h1 className="text-3xl font-semibold underline decoration-4 underline-offset-2">
        <Link to="/">WDA</Link>
      </h1>
    </header>
  );
}

export default Header;

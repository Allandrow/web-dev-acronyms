import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark-500 p-4">
      <Link to="/">
        <h1 className="text-2xl">WDA</h1>
      </Link>
    </header>
  );
}

export default Header;

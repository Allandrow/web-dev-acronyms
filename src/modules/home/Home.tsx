import { FormEvent, SyntheticEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { getAcronyms } from '@services';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`acronym/${searchTerm}`);
  };

  const { data } = useQuery('acronyms', getAcronyms);

  return (
    <main className="flex-1">
      <p>
        Find the meaning of an acronym used in web development spheres, with
        additional resources to learn more about them !
      </p>
      <form>
        <label htmlFor="acronymSearch">
          Search an acronym
          <input
            type="text"
            id="acronymSearch"
            placeholder="Search"
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <ul>
        {data.map((acronym: string) => (
          <li key={acronym}>
            <Link to={`acronym/${acronym}`}>{acronym}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;

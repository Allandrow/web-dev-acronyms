import { FormEvent, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from './assets/search.svg';

function Form() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`acronym/${searchTerm}`);
  };

  return (
    <form className="flex justify-center">
      <label htmlFor="acronymSearch" className="relative">
        <input
          type="text"
          id="acronymSearch"
          placeholder="Search an acronym"
          name="acronymSearch"
          autoComplete="acronyms"
          onChange={handleChange}
          className="peer border-b-2 placeholder-transparent p-2 focus:border-b-amber-600 outline-none"
        />
        <span
          className="absolute left-2 -top-6 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base 
          transition-all peer-focus:left-2 peer-focus:-top-6 peer-focus:text-sm cursor-pointer">
          Search an acronym
        </span>
      </label>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={searchTerm.trim().length === 0}
        className="cursor-pointer disabled:cursor-default">
        <img src={SearchIcon} alt="Search" className="w-6 h-6" />
      </button>
    </form>
  );
}

export default Form;

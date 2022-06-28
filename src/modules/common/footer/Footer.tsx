import { Link } from 'react-router-dom';
import links from './footerLinks';

function Footer() {
  return (
    <footer className="shadow-inner p-6">
      <p className="text-center">Made by Cyril Tiger in 2022.</p>
      <ul className="flex justify-center gap-4 mt-2">
        {links.map(({ url, title, external }) => (
          <li key={title}>
            {external ? (
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              <Link to={url}>{title}</Link>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

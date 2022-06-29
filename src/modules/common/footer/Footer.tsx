import { links } from '@data';

function Footer() {
  return (
    <footer className="shadow-inner p-6">
      <p className="text-center">Made by Cyril Tiger in 2022.</p>
      <ul className="flex justify-center gap-4 mt-2">
        {links.map(({ url, title }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

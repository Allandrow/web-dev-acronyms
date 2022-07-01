import { Acronym } from '@data';
import { getAcronym } from '@services';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { iconMap } from './icons';

function Result() {
  const { id } = useParams();

  const { data } = useQuery<Acronym>(['acronyms', id], () => getAcronym(id!));

  const { acronym, definition, quote, resources, related } = data!;

  return (
    <article className="flex-1 gap-16 grid grid-cols-2 auto-rows-min px-4">
      <header className="col-span-2">
        <h2 className="text-5xl text-center font-semibold">
          <span className="uppercase">{`"${acronym}"`}</span> means{' '}
          <span>{definition}</span>
        </h2>
      </header>
      <section>
        <h3>Quick Description</h3>
        <figure>
          <blockquote>{quote.content}</blockquote>
          <figcaption>
            Quote from{' '}
            <cite>
              <a href={quote.url} target="_blank" rel="noreferrer">
                {quote.author}
              </a>
            </cite>
          </figcaption>
        </figure>
        {related && (
          <section>
            <h3>Related acronyms</h3>
            <ul>
              {related?.map((item) => (
                <li key={item}>
                  <Link to={`/acronym/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>
      <section className="grid justify-center">
        <h3>Further learning</h3>
        <ul>
          {resources.map((media) => (
            <li key={media.title}>
              <a href={media.url}>
                <img
                  src={iconMap.get(media.type)}
                  alt={iconMap.get(media.type)}
                />
                <span>{media.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Result;

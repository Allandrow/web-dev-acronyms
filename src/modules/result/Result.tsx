import { Acronym } from '@data';
import { getAcronym } from '@services';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

function Result() {
  const { id } = useParams();

  const { data } = useQuery<Acronym>(['acronyms', id], () => getAcronym(id!));

  return (
    <section className="flex-1">
      <p>
        {data?.acronym} means {data?.definition}
      </p>
      <h3>Quick description</h3>
      <p>{data?.quote.content}</p>
      <p>Quote from {data?.quote.author}</p>
      <h3>Further learning</h3>
      <ul>
        {data?.resources.map((media) => (
          <li key={media.title}>
            <a href={media.url}>
              <span>{media.type}</span> - <span>{media.title}</span>
            </a>
          </li>
        ))}
      </ul>
      {data?.related && (
        <>
          <h3>Related acronyms</h3>
          <ul>
            {data?.related?.map((item) => (
              <li key={item}>
                <Link to={`/acronym/${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default Result;

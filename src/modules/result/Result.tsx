import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Acronym } from '@data';

function Result() {
  const { id } = useParams();

  const { data } = useQuery<Acronym>(['acronyms', id], () =>
    fetch(`/acronym/${id}`).then((res) => res.json()),
  );

  return (
    <main>
      <p>
        {data?.acronym} means {data?.definition}
      </p>
      <h3>Quick description</h3>
      <p>{data?.quote}</p>
      <p>Quote from {data?.quoteAuthor}</p>
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
      <h3>Related acronyms</h3>
      <ul>
        {data?.related.map((item) => (
          <li key={item}>
            <Link to={`/acronym/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Result;

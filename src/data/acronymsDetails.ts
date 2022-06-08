interface AcronymResource {
  title: string;
  type: 'article' | 'video';
  url: string;
}

export interface Acronym {
  acronym: string;
  definition: string;
  quote: string;
  quoteAuthor: string;
  resources: AcronymResource[];
  related: string[];
}

const acronymsDetails: Acronym[] = [
  {
    acronym: 'api',
    definition: 'application programming interface',
    quote:
      'An application programming interface (API) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software.[1] A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation.',
    quoteAuthor: 'wikipedia',
    resources: [
      {
        title: 'What is an API?',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=s7wmiS2mSXY',
      },
      {
        title: 'What is an API, and how do developers use them ?',
        type: 'article',
        url: 'https://www.howtogeek.com/343877/what-is-an-api/',
      },
    ],
    related: ['rest', 'soap', 'json'],
  },
];

export default acronymsDetails;

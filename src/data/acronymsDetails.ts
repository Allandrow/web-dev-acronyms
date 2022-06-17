interface AcronymResource {
  title: string;
  type?: 'article' | 'video' | 'podcast' | 'playlist';
  url: string;
  source: string;
}

interface Quote {
  content: string;
  author: string;
  url: string;
}

export interface Acronym {
  acronym: string;
  definition: string;
  quote: Quote;
  resources: AcronymResource[];
  related?: string[];
}

const acronymsDetails: Acronym[] = [
  {
    acronym: 'a11y',
    definition: 'Accessibility',
    quote: {
      content:
        'Accessibility (a11y) is a measure of how accessible a computer system is to all people, including those with disabilities or impairments. It concerns both software and hardware and how they are configured in order to enable a disabled or impaired person to use that computer system successfully.',
      author: 'techopedia.com',
      url: 'https://www.techopedia.com/definition/10165/accessibility-a11y',
    },
    resources: [
      {
        title: 'The A11Y Project',
        url: 'https://www.a11yproject.com/',
        source: 'a11yproject.com',
      },
      {
        title: 'A11YCasts with Rob Dodson',
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g',
        source: 'youtube.com',
      },
      {
        title: 'Accessibility',
        type: 'article',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
        source: 'mdn.com',
      },
    ],
  },
  {
    acronym: 'cdn',
    definition: 'Content Delivery Network',
    quote: {
      content:
        'A content delivery network, is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users.[…] CDNs have grown to serve a large portion of the Internet content today, including web objects (text, graphics and scripts), downloadable objects (media files, software, documents), applications (e-commerce, portals), live streaming media, on-demand streaming media, and social media sites',
      author: 'wikipedia.com',
      url: 'https://en.wikipedia.org/wiki/Content_delivery_network',
    },
    resources: [
      {
        title: 'CDN (Content Delivery Network) Explained in 60 Seconds',
        type: 'video',
        source: 'LiquidWeb - youtube',
        url: 'https://www.youtube.com/watch?v=InhGahmVjdk',
      },
      {
        title: 'What Is A CDN & Where Does It Shine?',
        type: 'article',
        source: 'cdnetworks.com',
        url: 'https://www.cdnetworks.com/what-is-a-cdn/',
      },
      {
        title: "What is a Content Delivery Network (CDN) - A Beginner's Guide",
        type: 'article',
        source: 'imagekit.io',
        url: 'https://imagekit.io/blog/what-is-content-delivery-network-cdn-guide/',
      },
    ],
  },
  {
    acronym: 'cdd',
    definition: 'component driven development',
    quote: {
      content:
        'Component-Driven Development (CDD) is a development methodology that anchors the build process around components. It is a process that builds UIs from the “bottom up” by starting at the level of components and ending at the level of pages or screens.',
      author: 'Tom Coleman - chromatic.com',
      url: 'https://www.chromatic.com/blog/component-driven-development/',
    },
    resources: [
      {
        title: 'WTF is Component-Driven Development?',
        type: 'article',
        source: 'seancdavis.com',
        url: 'https://www.seancdavis.com/posts/wtf-is-component-driven-development/',
      },
      {
        title: 'A Guide to Component Driven Development',
        type: 'article',
        source: 'Jonathan Saring - itnext.io',
        url: 'https://itnext.io/a-guide-to-component-driven-development-cdd-1516f65d8b55',
      },
      {
        title: 'A Guide to Component Driven Development',
        type: 'article',
        source: 'Hiren Dhaduk - dzone.com',
        url: 'https://dzone.com/articles/a-guide-to-component-driven-development-cdd',
      },
    ],
  },
  {
    acronym: 'dom',
    definition: 'Document Object Model',
    quote: {
      content:
        'The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. […] With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content. Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions - in particular, the DOM interfaces for the XML internal and external subsets have not yet been specified.',
      author: 'w3.org',
      url: 'https://www.w3.org/TR/REC-DOM-Level-1/introduction.html',
    },
    resources: [
      {
        title: 'What is DOM?',
        source: 'codecademy.com',
        type: 'article',
        url: 'https://www.codecademy.com/resources/blog/what-is-dom/',
      },
      {
        title: 'What is DOM?',
        source: 'educative.io',
        type: 'article',
        url: 'https://www.educative.io/answers/what-is-dom',
      },
      {
        title: 'Introduction to the DOM',
        source: 'mdn',
        type: 'article',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
      },
      {
        title: 'What is the DOM',
        source: 'LevelUpTuts - youtube',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=i_T33FSl254',
      },
    ],
  },
];

export default acronymsDetails;

/* AcronymTemplate

{
  acronym: '',
  definition: '',
  quote: {
    content: '',
    author: '',
    url: ''
  },
  resources: [
    {
      title: '',
      type: '',
      url: '',
      source: '',
    }
  ]
},

*/

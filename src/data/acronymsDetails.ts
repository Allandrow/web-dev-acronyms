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
        source: 'youtube.com',
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
];

export default acronymsDetails;

interface Resource {
  title: string;
  url: string;
}

interface Video extends Resource {
  type: 'video';
  platform: 'youtube';
  source: string;
}

interface Website extends Resource {
  type: 'website';
  name: string;
}

interface Article extends Resource {
  type: 'article';
  author: string;
}

interface Documentation extends Resource {
  type: 'documentation';
  name: string;
}

type AcronymResource = Video | Website | Article | Documentation;

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

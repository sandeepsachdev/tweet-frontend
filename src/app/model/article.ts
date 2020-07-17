export interface Article {
  source : Source
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
    id : string,
    name: string
}

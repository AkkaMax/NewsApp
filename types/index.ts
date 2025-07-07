export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  readTime: number;
}
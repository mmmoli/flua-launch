export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: Author;
}

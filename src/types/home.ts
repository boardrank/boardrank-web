export interface GenreListResponseType {
  genres: [GenreListType];
}

export interface GenreListType {
  id: number;
  code: string;
  name: string;
  order: number;
}

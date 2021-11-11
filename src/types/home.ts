export interface GenreListResponseType {
  genres: [
    {
      id: number;
      code: string;
      name: string;
      order: number;
    }
  ];
}

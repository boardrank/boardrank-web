export interface GenreListResponseType {
  genres: [GenreListType];
}

export interface GenreListType {
  id: number;
  code: string;
  name: string;
  order: number;
}

export interface GameListResponseType {
  boardGames: [GameListType];
}

export interface GameListType {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  designer: string;
  difficulty: number;
  personnel: string;
  recommendPersonnel: string;
  playTime: number;
  age: number;
  genres: [
    {
      id: number;
      code: string;
      name: string;
      order: number;
    }
  ];
  averageScore: number;
}

export interface GameType {
  boardGame: {
    id: number;
    name: string;
    description: string;
    thumbnailUrl: string;
    designer: string;
    difficulty: number;
    personnel: string;
    recommendPersonnel: string;
    playTime: number;
    age: number;
    genres: [
      {
        id: number;
        code: string;
        name: string;
        order: number;
      }
    ];
    averageScore: number;
    rank: number;
    myScore: number;
    boardGameScores: [
      {
        id: number;
        score: number;
        userId: number;
        boardGameId: number;
      }
    ];
  };
}

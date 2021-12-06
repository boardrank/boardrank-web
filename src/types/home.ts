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
    id: 1;
    name: "마라케시";
    description: "격자에서 이동,영역내 영향력,주사위(룰렛) 굴리고 이동,타일 놓기";
    thumbnailUrl: "string";
    designer: "Dominique Ehrhard";
    difficulty: 3;
    personnel: "2명 ~ 4명";
    recommendPersonnel: "2명 ~ 4명";
    playTime: 20;
    age: 8;
    genres: [
      {
        id: 1;
        code: "STRATEGY";
        name: "전략";
        order: 1;
      }
    ];
    averageScore: 9;
    rank: 2;
    myScore: 0;
    boardGameScores: [
      {
        id: 1;
        score: 8;
        userId: 10;
        boardGameId: 3;
      }
    ];
  };
}

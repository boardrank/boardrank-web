import {
  getBoardGameListUrl,
  getBoardGameListUrlWithGenreId,
  getGenreListUrl,
} from "api/home";
import React, { useEffect, useState } from "react";
import { GameListType, GenreListType } from "types/home";

export interface UseHomePropsType {
  genreId?: number;
}

const useHome = ({ genreId }: UseHomePropsType) => {
  const [genreLists, setGenreLists] = useState<GenreListType[]>();
  const [gameLists, setGameLists] = useState<GameListType[]>();

  const genresState = async () => {
    try {
      const res = await getGenreListUrl();
      setGenreLists(res.data.genres);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    genresState();
  }, []);

  const gameState = async () => {
    try {
      if (genreId === 0 || genreId === undefined) {
        const res = await getBoardGameListUrl();
        setGameLists(res.data.boardGames);
      } else {
        const res = await getBoardGameListUrlWithGenreId({ genreId });
        setGameLists(res.data.boardGames);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    gameState();
  }, [genreId]);

  return { genreLists, gameLists };
};

export default useHome;

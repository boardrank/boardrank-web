import { getBoardGameUrlWithGameId } from "api/gameDetail";
import React, { useEffect, useState } from "react";
import { GameType } from "types/home";

export interface useGameDetailPropsType {
  gameId: any;
}

const useGameDetail = ({ gameId }: useGameDetailPropsType) => {
  const [gameData, setGameData] = useState<GameType>();

  const gameDetail = async () => {
    try {
      const res = await getBoardGameUrlWithGameId({ gameId });
      setGameData(res.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    gameDetail();
  }, []);

  return { gameData, gameDetail };
};

export default useGameDetail;

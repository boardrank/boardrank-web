import axios from "axios";
import { BoardGameScoreUrlRequestType } from "types/score";
import { AxiosError } from "axios";
import { ApiErrorResponse } from "types/api";

export const getAxiosError = (error: any) => {
  if ((error as AxiosError).isAxiosError && error.response) {
    return error.response.data as ApiErrorResponse;
  }
  return null;
};

export const boardGameReplyUrl = async (
  req: BoardGameScoreUrlRequestType,
  gameId: number
) => {
  const score = Number(req.score);
  return await axios({
    url: "board-game-score",
    method: "POST",
    data: {
      boardGameScore: {
        score: score,
        comment: req.comment,
        boardGameId: Number(gameId),
      },
    },
  });
};

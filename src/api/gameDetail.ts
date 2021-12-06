import axios from "axios";

export interface GetBoardGameUrlRequestType {
  gameId: any;
}

export const getBoardGameUrlWithGameId = async (
  req: GetBoardGameUrlRequestType
) => {
  return await axios.get(`board-game/${req.gameId}`);
};

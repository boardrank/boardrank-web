import axios from "axios";
import { GameListResponseType, GenreListResponseType } from "types/home";

export const getGenreListUrl = async () => {
  return await axios.get<GenreListResponseType>("/genre/list");
};

export interface GetGameStateRequestType {
  genreId: number;
}

export const getBoardGameListUrl = async () => {
  return await axios.get<GameListResponseType>(`/board-game/list`);
};

export const getBoardGameListUrlWithGenreId = async (
  req: GetGameStateRequestType
) => {
  return await axios.get<GameListResponseType>(
    `/board-game/list/${req.genreId}`
  );
};

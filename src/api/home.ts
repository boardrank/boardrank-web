import axios from "axios";
import { GenreListResponseType } from "types/home";

export const getGenreListUrl = async () => {
  return await axios.get<GenreListResponseType>("/genre/list");
};

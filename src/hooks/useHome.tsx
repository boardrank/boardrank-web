import { getGenreListUrl } from "api/home";
import React, { useState } from "react";
import { GenreListType } from "types/home";

const useHome = () => {
  const [genryLists, setGenryLists] = useState<GenreListType[]>();

  const genresState = async () => {
    try {
      const res = await getGenreListUrl();
      setGenryLists(res.data.genres);
      return res.data.genres;
    } catch (error) {
      throw error;
    }
  };

  return { genresState, genryLists };
};

export default useHome;

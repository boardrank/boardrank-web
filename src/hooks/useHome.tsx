import { getGenreListUrl } from "api/home";
import React from "react";
import { selector } from "recoil";

const useHome = () => {
  const genresState = selector({
    key: "Genres",
    get: async () => {
      try {
        const res = await getGenreListUrl();
        return res.data.genres;
      } catch (error) {
        throw error;
      }
    },
  });

  return { genresState };
};

export default useHome;

import React, { useState } from "react";
import GameList from "./GameList";
import GenreList from "./GenreList";

const Home = () => {
  const [genreId, setGenreId] = useState(0);

  return (
    <section className="inner">
      <GenreList setGenreId={setGenreId} genreId={genreId} />
      <GameList genreId={genreId} />
    </section>
  );
};

export default Home;

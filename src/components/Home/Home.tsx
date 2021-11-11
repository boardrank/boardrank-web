import React, { useState } from "react";
import GameList from "./GameList";
import GenreList from "./GenreList";

const Home = () => {
  const [genryName, setGenryName] = useState("테마");

  return (
    <section className="inner">
      <GenreList setGenryName={setGenryName} />
      {/* <GameList genryName={genryName} /> */}
    </section>
  );
};

export default Home;

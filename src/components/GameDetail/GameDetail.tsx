import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GameInfo from "./GameInfo";
import GameReview from "./GameReview";

const GameDetail = () => {
  const { gameId }: any = useParams();
  return (
    <GameDetailWrapper>
      <GameInfo gameId={gameId} />
      <GameReview />
    </GameDetailWrapper>
  );
};

const GameDetailWrapper = styled.section`
  padding: 80px 0 150px;
`;

export default GameDetail;

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
      <GameReview gameId={gameId} />
    </GameDetailWrapper>
  );
};

const GameDetailWrapper = styled.section`
  padding: 80px 0 150px;
  @media ${(props) => props.theme.tablet} {
    padding: 24px 15px 150px;
  }
`;

export default GameDetail;

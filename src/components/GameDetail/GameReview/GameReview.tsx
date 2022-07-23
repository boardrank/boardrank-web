import React, { useEffect, useState } from "react";
import styled from "styled-components";
import palette from "styles/palette";
import { GameType } from "types/home";
import GameReviewModal from "../GameReviewModal/GameReviewModal";
import ScoreSection from "./ScoreSection";

export interface GameReviewPropsType {
  gameId: number;
  gameData: GameType | undefined;
  gameDetail: () => void;
}

function GameReview({ gameId, gameData, gameDetail }: GameReviewPropsType) {
  const [isReviewModal, setIsReviewModal] = useState(false);
  const game = gameData?.boardGame;
  const scores = gameData?.boardGame.boardGameScores;

  const [ratingStar, setRatingStar] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);

  const handleStars = () => {
    let newRatingStar = [];
    for (let i = 0; i < 5; i++) {
      if (game && i === (game?.averageScore - 1) / 2) {
        newRatingStar[i] = "half";
      } else if (game && i < game?.averageScore / 2) {
        newRatingStar[i] = "full";
      } else {
        newRatingStar[i] = "empty";
      }
    }

    setRatingStar(newRatingStar);
  };

  useEffect(() => {
    handleStars();
  }, [game]);

  return (
    <>
      <GameReviewWrapper>
        <TitleWrapper averageScore={game?.averageScore}>
          <div className="title-container">
            <p className="title font-jost">
              User<span>Point</span>
            </p>
            <p className="rating font-jost">
              {game?.averageScore === 0 ? "0" : game?.averageScore}
            </p>
            <div className="rating-star">
              {ratingStar.map((n, idx) => {
                return (
                  <img
                    src={
                      n === "full"
                        ? "/image/star.svg"
                        : n === "empty"
                        ? "/image/star_border.svg"
                        : n === "half"
                        ? "/image/star_half.svg"
                        : ""
                    }
                    alt="별 아이콘"
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
          <StyledButton
            onClick={() => {
              setIsReviewModal(true);
            }}
          >
            <span>👀 </span>나도 이 게임 평가하기~!
          </StyledButton>
        </TitleWrapper>
        {scores &&
          scores.map((n, idx) => {
            return <ScoreSection info={n} key={idx} />;
          })}
      </GameReviewWrapper>
      {isReviewModal && (
        <GameReviewModal
          closeModal={setIsReviewModal}
          gameId={gameId}
          gameData={gameData}
          gameDetail={gameDetail}
        />
      )}
    </>
  );
}

const GameReviewWrapper = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

const TitleWrapper = styled.section<{ averageScore: number | undefined }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 36px;
  border-bottom: 1px solid ${palette.grey_9};
  margin-bottom: 36px;
  .title-container {
    display: flex;
    align-items: center;
    .title {
      font-size: 32px;
      line-height: 32px;
      font-weight: 400;
      color: ${palette.grey_10};
      display: flex;
      align-items: center;
      span {
        margin-left: 6px;
      }
    }
    .rating {
      margin-left: 16px;
      font-size: 32px;
      line-height: 32px;
      font-weight: 700;
      color: ${(props) =>
        props.averageScore !== 0 ? palette.main_0 : palette.grey_7};
    }
    .rating-star {
      margin-left: 12px;
      img {
        width: 32px;
      }
    }
  }
  @media ${(props) => props.theme.tablet} {
    padding-bottom: 20px;
    margin-bottom: 24px;
    .title-container {
      .title {
        font-size: 28px;
        line-height: 28px;
        font-weight: 600;
        span {
          margin-left: 4px;
        }
      }
      .rating {
        font-size: 28px;
        line-height: 28px;
        margin-left: 8px;
      }
      .rating-star {
        img {
          width: 26px;
        }
      }
    }
  }
`;

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${palette.grey_1};
  width: 280px;
  height: 52px;
  background-color: ${palette.grey_10};
  span {
    font-size: 20px;
    line-height: 20px;
  }
  @media ${(props) => props.theme.tablet} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 68px;
  }
`;

export default GameReview;

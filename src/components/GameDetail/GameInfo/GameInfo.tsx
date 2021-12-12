import useGameDetail from "hooks/useGameDetail";
import React from "react";
import styled from "styled-components";
import palette from "styles/palette";

export interface GameInfoPropsType {
  gameId: any;
}

const GameInfo = ({ gameId }: GameInfoPropsType) => {
  const { gameData } = useGameDetail({ gameId });
  const game = gameData?.boardGame;
  return (
    <GameInfoWrapper>
      {game && (
        <>
          <figure className="thumbnail">
            <img src={game.thumbnailUrl} alt={`${game.name} 썸네일 이미지`} />
          </figure>
          <GameInfoSection>
            <h2>{game.name}</h2>
            <GameInfoContainer>
              <div className="info-container">
                <div className="info-row">
                  <p className="lable">전체 평점</p>
                  <p className="description ranking">{game.rank}위</p>
                  <span className="devider"></span>
                  <p className="lable">디자이너</p>
                  <p className="description">{game.designer}</p>
                </div>
                <div className="info-row">
                  <p className="lable">게임인원</p>
                  <p className="description">
                    {game.personnel}명 /{game.recommendPersonnel}명 추천
                  </p>
                  <span className="devider"></span>
                  <p className="lable">플레이 시간</p>
                  <p className="description">{game.playTime}</p>
                  <span className="devider"></span>
                  <p className="lable">사용연령</p>
                  <p className="description">{game.age}세 이상</p>
                  <span className="devider"></span>
                  <p className="lable">게임 난이도</p>
                  <p className="description">{game.difficulty}/5</p>
                </div>
              </div>
              <p className="detail-description">{game.description}</p>
              <div className="tag-list">
                {game.genres.map((n) => {
                  return <p>#{n.name}&nbsp;</p>;
                })}
              </div>
            </GameInfoContainer>
          </GameInfoSection>
        </>
      )}
    </GameInfoWrapper>
  );
};

const GameInfoWrapper = styled.article`
  width: 100%;
  max-width: 1180px;
  padding-right: 100px;
  margin: 0 auto 120px;
  display: flex;
  .thumbnail {
    width: 280px;
    margin-right: 72px;
    img {
      width: 100%;
    }
  }
`;

const GameInfoSection = styled.section`
  width: calc(100% - 352px);
  h2 {
    padding: 2px 5px 32px;
    color: ${palette.grey_9};
    font-size: 28px;
    font-weight: 900;
    line-height: 39.2px;
    border-bottom: 3px solid ${palette.grey_9};
    margin-bottom: 32px;
    width: 100%;
    display: inline-block;
  }
`;

const GameInfoContainer = styled.section`
  .info-container {
    padding: 0 5px;
    .info-row {
      display: flex;
      align-items: center;
      padding-bottom: 16px;
      &:nth-child(2) {
        padding-bottom: 36px;
        margin-bottom: 32px;
        border-bottom: 1px solid ${palette.grey_2};
      }
      .lable {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        color: ${palette.grey_6};
        margin-right: 8px;
      }
      .description {
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        color: ${palette.grey_8};
        &.ranking {
          color: ${palette.main_0};
        }
      }
      .devider {
        width: 1px;
        height: 16px;
        margin: 0 20px;
        background-color: ${palette.grey_4};
      }
    }
  }
  .detail-description {
    padding: 0 5px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${palette.grey_8};
    margin-bottom: 12px;
  }
  .tag-list {
    display: flex;
    padding: 0 5px;
    p {
      font-size: 16px;
      line-height: 25.6px;
      font-weight: 400;
      color: ${palette.grey_6};
    }
  }
`;

export default GameInfo;

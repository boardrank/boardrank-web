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
          <figure className="thumbnail pc-img">
            <img src={game.thumbnailUrl} alt={`${game.name} 썸네일 이미지`} />
          </figure>
          <GameInfoSection>
            <figure className="thumbnail mob-img">
              <img src={game.thumbnailUrl} alt={`${game.name} 썸네일 이미지`} />
            </figure>
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
                  <p className="description">{game.playTime}분</p>
                  <span className="devider pc-devider"></span>
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
  .thumbnail.pc-img {
    width: 280px;
    margin-right: 72px;
    img {
      width: 100%;
    }
  }
  @media ${(props) => props.theme.tablet} {
    padding: 0;
    margin-bottom: 60px;
    .thumbnail.pc-img {
      display: none;
    }
  }
`;

const GameInfoSection = styled.section`
  width: calc(100% - 352px);
  .thumbnail.mob-img {
    display: none;
  }
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
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    .thumbnail.mob-img {
      display: block;
      height: 193px;
      margin: auto;
      text-align: center;
      margin-bottom: 24px;
      img {
        width: auto;
        height: 100%;
      }
    }
    h2 {
      text-align: center;
      font-size: 24px;
      line-height: 140%;
      color: ${palette.grey_9};
      padding: 0;
      margin-bottom: 24px;
      border: 0;
    }
  }
`;

const GameInfoContainer = styled.section`
  .info-container {
    padding: 0 5px 20px;
    border-bottom: 1px solid ${palette.grey_2};
    margin-bottom: 32px;
    .info-row {
      display: flex;
      align-items: center;
      padding-bottom: 16px;
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
  @media ${(props) => props.theme.tablet} {
    padding: 0;
    .info-container {
      margin-bottom: 28px;
      padding: 28px 5px 4px;
      border-top: 1px solid ${palette.grey_2};
      .info-row {
        flex-wrap: wrap;
        padding-bottom: 0;
        .lable,
        .description,
        .devider {
          margin-bottom: 24px;
        }
        .pc-devider {
          display: none;
        }
      }
    }
    .detail-description {
      line-height: 180%;
    }
    .tag-list {
      p {
        font-size: 14px;
        line-height: 22.4px;
      }
    }
  }
`;

export default GameInfo;

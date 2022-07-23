import useHome from "hooks/useHome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "styles/palette";

export interface GameListPropsType {
  genreId: number;
}

const GameList = ({ genreId }: GameListPropsType) => {
  const { gameLists } = useHome({ genreId });

  return (
    <StyledGameUl>
      {gameLists &&
        gameLists.map((game) => (
          <li key={game.id}>
            <figure className="pc-img">
              <img src={game.thumbnailUrl} alt={`${game.name} 프로필 이미지`} />
            </figure>
            <div className="info-wrapper">
              <div className="title-wrapper">
                <figure className="mobile-img">
                  <img
                    src={game.thumbnailUrl}
                    alt={`${game.name} 프로필 이미지`}
                  />
                </figure>
                <div className="title-box">
                  <div className="title">
                    <h3>
                      <Link to={`/game-detail/${game.id}`}>{game.name}</Link>
                    </h3>
                    <p>
                      {game.personnel}명 / {game.recommendPersonnel}명추천
                    </p>
                  </div>
                  <div className="user-point font-jost">
                    User point
                    <span className="font-jost">
                      {game.averageScore !== 0
                        ? game.averageScore.toFixed(1)
                        : "평가 전"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="detail">{game.description}</p>

              <p className="tag">
                {game.genres.map((n) => {
                  return "#" + n.name + " ";
                })}
              </p>
            </div>
          </li>
        ))}
    </StyledGameUl>
  );
};

const StyledGameUl = styled.ul`
  width: 100%;
  max-width: 1112px;
  margin: auto;
  li {
    border-bottom: 1px solid ${palette.grey_2};
    padding: 64px 84px;
    display: flex;
    align-items: flex-start;

    .pc-img {
      width: 190px;
      margin-right: 30px;
    }
    .info-wrapper {
      width: calc(100% - 220px);
      .title-wrapper {
        border-bottom: 1px solid ${palette.grey_9};
        margin-bottom: 24px;
        padding: 16px 10px 25px;
        .mobile-img {
          display: none;
        }
        .title-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .title {
            display: flex;
            align-items: center;
            h3 {
              a {
                font-weight: 900;
                font-size: 26px;
                line-height: 100%;
                color: ${palette.grey_9};
                margin-right: 20px;
              }
            }
            p {
              font-weight: 500;
              font-size: 16px;
              line-height: 100%;
              color: ${palette.grey_5};
            }
          }
          .user-point {
            font-weight: normal;
            font-size: 26px;
            line-height: 100%;
            color: ${palette.grey_8};
            span {
              font-weight: bold;
              font-size: 26px;
              line-height: 100%;
              color: ${palette.main_0};
              margin-left: 12px;
            }
          }
        }
      }
      .detail {
        font-weight: 500;
        font-size: 15px;
        line-height: 160%;
        color: ${palette.grey_7};
        padding: 0 10px;
        margin-bottom: 12px;
        width: 100%;
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .tag {
        padding: 0 10px;
        font-weight: normal;
        font-size: 15px;
        line-height: 160%;
        color: ${palette.grey_5};
      }
    }
  }
  @media ${(props) => props.theme.tablet} {
    padding: 0 16px;
    li {
      padding: 48px 0;
      .pc-img {
        display: none;
      }
      .info-wrapper {
        width: 100%;
        .title-wrapper {
          display: flex;
          padding: 0px 8px 24px;
          margin-bottom: 17px;
          .mobile-img {
            display: block;
            width: 122px;
            margin-right: 20px;
          }
          .title-box {
            padding-top: 8px;
            display: block;
            width: calc(100% - 142px);
            .title {
              display: block;
              h3 {
                a {
                  font-size: 22px;
                }
                margin-bottom: 20px;
              }
              p {
                margin-bottom: 20px;
              }
            }
            .user-point {
              font-size: 24px;
              span {
                margin-left: 8px;
                font-size: 24px;
              }
            }
          }
        }
        .detail {
          font-size: 14px;
          line-height: 22.4px;
          margin-bottom: 8px;
        }
        .tag {
          padding: 0 8px;
          font-size: 14px;
          line-height: 22.4px;
        }
      }
    }
  }
`;

export default GameList;

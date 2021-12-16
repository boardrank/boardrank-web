import React, { useState } from "react";
import styled from "styled-components";
import palette from "styles/palette";
import GameReviewModal from "../GameReviewModal/GameReviewModal";

export interface GameReviewPropsType {
  gameId: number;
}

function GameReview({ gameId }: GameReviewPropsType) {
  const [isReviewModal, setIsReviewModal] = useState(false);

  return (
    <>
      <GameReviewWrapper>
        <TitleWrapper>
          <div className="title-container">
            <p className="title font-jost">
              User<span>Point</span>
            </p>
            <p className="rating font-jost">9</p>
            <div className="rating-star">
              <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
              <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
              <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
              <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
              <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
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
        <Review>
          <div className="review-info">
            <div className="star-container">
              <div className="rating-star">
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
              </div>
              <p>username*******</p>
            </div>
            <p className="date">2021.12.12</p>
          </div>
          <p className="review-contents">
            승부욕 불태우기 딱 좋은 게임입니다. 추천해용!!!승부욕 불태우기 딱
            좋은 게임입니다. 추천해용!!!승부욕 불태우기 딱 좋은 게임입니다.
            추천해용!!!승부욕 불태우기 딱 좋은 게임입니다. 추천해용!!!승부욕
            불태우기 딱 좋은 게임입니다. 추천해용!!!승부욕 불태우기 딱 좋은
            게임입니다. 추천해용!!!승부욕 불태우기 딱 좋은 게임입니다.
            추천해용!!!승부욕 불태우기 딱 좋은 게임입니다. 추천해용!!!
          </p>
        </Review>
        <Review>
          <div className="review-info">
            <div className="star-container">
              <div className="rating-star">
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
                <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
              </div>
              <p>username*******</p>
            </div>
            <p className="date">2021.12.12</p>
          </div>
          <p className="review-contents">
            승부욕 불태우기 딱 좋은 게임입니다. 추천해용!!!승부욕 불태우기 딱
            좋은 게임입니다. 추천해용!!!승부욕 불태우기 딱 좋은 게임입니다.
            추천해용!!!승부욕 불태우기 딱 좋은 게임입니다. 추천해용!!!승부욕
            불태우기 딱 좋은 게임입니다. 추천해용!!!승부욕 불태우기 딱 좋은
            게임입니다. 추천해용!!!승부욕 불태우기 딱 좋은 게임입니다.
            추천해용!!!승부욕 불태우기 딱 좋은 게임입니다. 추천해용!!!
          </p>
        </Review>
      </GameReviewWrapper>
      {isReviewModal && (
        <GameReviewModal closeModal={setIsReviewModal} gameId={gameId} />
      )}
    </>
  );
}

const GameReviewWrapper = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

const TitleWrapper = styled.section`
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
      color: ${palette.main_0};
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

const Review = styled.section`
  padding-bottom: 44px;
  margin-bottom: 44px;
  border-bottom: 1px solid ${palette.grey_2};
  &:last-child {
    margin-bottom: 0;
  }
  .review-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    .star-container {
      display: flex;
      align-items: center;
      .rating-star {
        img {
          width: 24px;
        }
      }
      p {
        font-size: 14px;
        font-weight: 500;
        line-height: 22.4px;
        color: ${palette.grey_6};
        margin-left: 12px;
      }
    }
    .date {
      font-size: 14px;
      line-height: 22.4px;
      font-weight: 500;
      color: ${palette.grey_6};
      padding-right: 5px;
    }
  }
  .review-contents {
    font-size: 16px;
    line-height: 25.6px;
    font-weight: 500;
    color: ${palette.grey_7};
  }
  @media ${(props) => props.theme.tablet} {
    padding-bottom: 24px;
    margin-bottom: 24px;
    .review-info {
      display: block;
      margin-bottom: 2px;
      .star-container {
        margin-bottom: 2px;
        .rating-star {
          img {
            width: 20px;
          }
        }
        p {
          font-size: 12px;
          line-height: 160%;
          color: ${palette.grey_7};
          margin-left: 8px;
        }
      }
      .date {
        font-size: 12px;
        line-height: 160%;
        color: ${palette.grey_6};
        padding-left: 4px;
      }
    }
    .review-contents {
      padding: 0 4px;
      font-size: 14px;
      line-height: 160%;
    }
  }
`;

export default GameReview;

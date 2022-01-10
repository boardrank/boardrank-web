import useOtherUser from "hooks/useOtherUser";
import React from "react";
import styled from "styled-components";
import palette from "styles/palette";
import { userType } from "types/user";
import Star from "./Star";

interface ScoreSectionPropsType {
  info: {
    id: number;
    score: number;
    userId: number;
    boardGameId: number;
    comment: string;
    createAt: string;
  };
}

const ScoreSection = ({ info }: ScoreSectionPropsType) => {
  const rating = Star(info.score);
  const userObj: userType | null = useOtherUser(info.userId);
  return (
    <Review>
      <div className="review-info">
        <div className="star-container">
          <div className="rating-star">
            {rating.newRatingStar.map((n, idx) => {
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
          <p>{userObj && userObj.nickname}</p>
        </div>
        {/* <p className="date">{info.createAt}</p> */}
      </div>
      <p className="review-contents">{info.comment}</p>
    </Review>
  );
};

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

export default ScoreSection;

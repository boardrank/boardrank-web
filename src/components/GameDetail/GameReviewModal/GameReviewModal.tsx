import useGameDetail from "hooks/useGameDetail";
import React from "react";
import styled from "styled-components";
import palette from "styles/palette";

export interface GameReviewModalPropsType {
  closeModal: (value: boolean) => void;
  gameId: number;
}

function GameReviewModal({ closeModal, gameId }: GameReviewModalPropsType) {
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(false);
    }
  };

  const { gameData } = useGameDetail({ gameId });
  const game = gameData?.boardGame;

  return (
    <ModalWrapper onClick={handleCloseModal}>
      <ModalContainer>
        <img
          className="close-modal-button pc"
          src="/image/close_modal.svg"
          alt="모달 닫기 버튼"
          onClick={handleCloseModal}
        />
        <img
          className="close-modal-button mo"
          src="/image/close_modal_mo.svg"
          alt="모달 닫기 버튼"
          onClick={handleCloseModal}
        />
        <h2>{game && game.name}</h2>
        <RatingArea>
          <div className="rating-star">
            <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
            <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
            <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
            <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
            <img src="/image/star.svg" alt="꽉찬 별 아이콘" />
            <p className="font-jost">0</p>
          </div>
          <p className="description">별점을 선택하세요</p>
        </RatingArea>
        <textarea placeholder="게임에 대한 리뷰를 남겨주세요."></textarea>
        <StyledSubmitButton>평가 등록하기</StyledSubmitButton>
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(34, 34, 36, 0.5);
  z-index: 13;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    align-items: flex-end;
    height: 100vh;
    height: -webkit-fill-available;
    height: fill-available;
  }
`;

const ModalContainer = styled.article`
  width: 780px;
  padding: 48px 100px;
  background-color: ${palette.grey_1};
  position: relative;

  .close-modal-button.mo {
    display: none;
  }
  .close-modal-button {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
  }
  h2 {
    font-size: 28px;
    line-height: 39.2px;
    font-weight: 900;
    color: ${palette.grey_9};
    text-align: center;
    padding-bottom: 24px;
    border-bottom: 2px solid ${palette.grey_10};
    margin-bottom: 40px;
  }
  textarea {
    width: 100%;
    height: 200px;
    border: 1px solid ${palette.grey_4};
    padding: 20px;
    font-size: 16px;
    line-height: 25.6px;
    font-weight: 400;
    color: ${palette.grey_8};
    margin-bottom: 40px;
    &::placeholder {
      color: ${palette.grey_5};
    }
    &:focus {
      outline: none;
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: calc(100% - 56px);
    border-radius: 10px 10px 0 0;
    padding: 48px 16px 56px;
    .close-modal-button.pc {
      display: none;
    }
    .close-modal-button.mo {
      display: block;
    }
    .close-modal-button {
      width: 46px;
      top: 0;
      right: 0;
    }
    h2 {
      font-size: 24px;
      line-height: 33.6px;
    }
    textarea {
      height: 286px;
      margin-bottom: 56px;
    }
  }
`;

const RatingArea = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  .rating-star {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    img {
      width: 40px;
    }
    p {
      margin-left: 16px;
      font-size: 36px;
      line-height: 36px;
      font-weight: 500;
      /* color: ${palette.grey_7}; */
      color: ${palette.main_0};
    }
  }
  .description {
    text-align: center;
    font-size: 14px;
    line-height: 22.4px;
    font-weight: 500;
    color: ${palette.grey_7};
  }
  @media ${(props) => props.theme.tablet} {
    .rating-star {
      margin-bottom: 16px;
    }
    .description {
      font-size: 16px;
      line-height: 25.6px;
    }
  }
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${palette.grey_10};
  color: ${palette.grey_1};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
`;

export default GameReviewModal;

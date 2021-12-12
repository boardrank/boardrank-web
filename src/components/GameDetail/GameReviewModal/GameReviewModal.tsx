import React from "react";
import styled from "styled-components";
import palette from "styles/palette";

export interface GameReviewModalPropsType {
  closeModal: (value: boolean) => void;
}

function GameReviewModal({ closeModal }: GameReviewModalPropsType) {
  const handleModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(false);
    }
  };

  return (
    <ModalWrapper onClick={handleModal}>
      <ModalContainer></ModalContainer>
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
`;

const ModalContainer = styled.article`
  width: 780px;
  padding: 48px 100px;
  background-color: ${palette.grey_1};
`;

export default GameReviewModal;

import { boardGameReplyUrl } from "api/score";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BoardGameScoreUrlRequestType } from "types/score";
import { getAxiosError } from "./useAuthService";

export interface useScorePropsType {
  gameId: number;
}

const useScore = ({ gameId }: useScorePropsType) => {
  const hookForm = useForm({
    mode: "onBlur",
  });
  const { setValue } = hookForm;

  const [isPostSuccess, setIsPostSuccess] = useState<boolean>(true);

  const handlePostReply = async (formData: BoardGameScoreUrlRequestType) => {
    try {
      await boardGameReplyUrl(formData, gameId);
    } catch (error) {
      const axiosErrorData = getAxiosError(error);
      // console.log(axiosErrorData?.errorCode, axiosErrorData?.errorMsg);
      if (axiosErrorData?.errorCode === 4010) alert("먼저 로그인 해주세요");
      throw error;
    }
  };

  return { hookForm, handlePostReply, isPostSuccess, setValue };
};

export default useScore;

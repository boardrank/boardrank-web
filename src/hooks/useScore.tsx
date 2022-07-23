import { boardGameReplyUrl } from "api/score";
import { useForm } from "react-hook-form";
import { BoardGameScoreUrlRequestType } from "types/score";
import { getAxiosError } from "./useAuthService";

export interface useScorePropsType {
  gameId: number;
  closeModal?: (value: boolean) => void;
  gameDetail: () => void;
}

const useScore = ({ gameId, closeModal, gameDetail }: useScorePropsType) => {
  const hookForm = useForm({
    mode: "onBlur",
  });
  const { setValue } = hookForm;

  const handlePostReply = async (formData: BoardGameScoreUrlRequestType) => {
    const { score, comment } = formData;
    try {
      await boardGameReplyUrl({ score, comment, gameId });
      closeModal && closeModal(false);
      gameDetail();
    } catch (error) {
      const axiosErrorData = getAxiosError(error);
      console.log(axiosErrorData?.errorCode, axiosErrorData?.errorMsg);
      if (axiosErrorData?.errorCode === 4010) alert("먼저 로그인 해주세요");
      if (axiosErrorData?.errorCode === 4091) alert(axiosErrorData?.errorMsg);
      closeModal && closeModal(false);
      throw error;
    }
  };

  return {
    hookForm,
    handlePostReply,
    setValue,
  };
};

export default useScore;

import { signInUrl, signUpUrl } from "api/auth";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { ApiErrorResponse } from "types/api";
import { AxiosError } from "axios";
import localforage from "localforage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn, signUp } from "_redux/auth";

export const getAxiosError = (error: any) => {
  if ((error as AxiosError).isAxiosError && error.response) {
    return error.response.data as ApiErrorResponse;
  }
  return null;
};

function useAuthService() {
  const dispatch = useDispatch();

  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    try {
      const { tokenId } = response as GoogleLoginResponse;
      await handleSignIn(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const handleSignUp = async (tokenId: string) => {
    try {
      const res = await signUpUrl({ tokenId });
      dispatch(signUp(res.data.accessToken));
    } catch (error) {
      throw error;
    }
  };

  const handleSignIn = async (tokenId: string) => {
    try {
      const res = await signInUrl({ tokenId });
      dispatch(signIn(res.data.accessToken));
    } catch (error) {
      const axiosErrorData = getAxiosError(error);
      if (axiosErrorData?.errorCode === 4040) return handleSignUp(tokenId);
      throw error;
    }
  };

  const LogOut = () => {
    // storage.removeItem("_tk");
  };

  return { responseGoogle, LogOut };
}

export default useAuthService;

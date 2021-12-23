import { signInUrl, signUpUrl } from "api/auth";
import React from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { ApiErrorResponse } from "types/api";
import { AxiosError } from "axios";
import localforage from "localforage";

export const getAxiosError = (error: any) => {
  if ((error as AxiosError).isAxiosError && error.response) {
    return error.response.data as ApiErrorResponse;
  }

  return null;
};

function useAuthService() {
  const storage = localforage.createInstance({
    name: "_rf",
    driver: localforage.LOCALSTORAGE,
  });

  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    try {
      const { tokenId } = response as GoogleLoginResponse;
      await signIn(tokenId);
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (tokenId: string) => {
    try {
      const res = await signUpUrl({ tokenId });
      storage.setItem("_tk", res.data.refreshToken);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (tokenId: string) => {
    try {
      const res = await signInUrl({ tokenId });
      storage.setItem("_tk", res.data.refreshToken);
    } catch (error) {
      const axiosErrorData = getAxiosError(error);
      if (axiosErrorData?.errorCode === 4040) return signUp(tokenId);
      throw error;
    }
  };

  return { responseGoogle };
}

export default useAuthService;

import { signInUrl, signUpUrl } from "api/auth";
import React from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

function useAuthService() {
  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    try {
      const { tokenId } = response as GoogleLoginResponse;
      signIn(tokenId);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (tokenId: string) => {
    try {
      const res = await signUpUrl({ tokenId });
      console.log(res);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (tokenId: string) => {
    try {
      const res = await signInUrl({ tokenId });
      console.log(res);
    } catch (error) {
      throw error;
    }
  };

  return { responseGoogle };
}

export default useAuthService;

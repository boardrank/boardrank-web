import React from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

function useAuthService() {
  const responseGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("test");
    try {
      const { tokenId } = response as GoogleLoginResponse;
      console.log("tokenId", tokenId);
    } catch (error) {
      console.log(error);
    }
  };
  return { responseGoogle };
}

export default useAuthService;

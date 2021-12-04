import React from "react";
import { GoogleLoginResponse } from "react-google-login";

function useAuthService() {
  const responseGoogle = async (response: GoogleLoginResponse | any) => {
    console.log(response.tokenObj.id_token);
    try {
      const { id_token } = response.tokenObj;
      return console.log("test");
    } catch (error) {
      console.log(error);
    }
  };
  return { responseGoogle };
}

export default useAuthService();

import axios from "axios";

export interface SignUpUrlRequestType {
  tokenId: string;
}

export const signUpUrl = async ({ tokenId }: SignUpUrlRequestType) => {
  return await axios({
    url: `auth/sign-up`,
    method: "POST",
    data: { idToken: tokenId },
  });
};

export const signInUrl = async ({ tokenId }: SignUpUrlRequestType) => {
  return await axios.request({
    url: `auth/sign-in`,
    method: "POST",
    data: { idToken: tokenId },
  });
};

import axios from "axios";

export const getUserUrl = async ({ refreshToken }: any) => {
  return axios.post("/auth/refresh", refreshToken).then((res) => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.accessToken}`;
    axios.get("/user");
  });
};

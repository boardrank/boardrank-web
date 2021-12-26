import axios from "axios";

export const getUserUrl = async ({ value, setUserObj }: any) => {
  await axios({
    url: "auth/refresh",
    method: "POST",
    data: { refreshToken: value },
  }).then((res) => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.accessToken}`;
    return axios.get("/user").then((res) => {
      setUserObj(res.data);
    });
  });
};

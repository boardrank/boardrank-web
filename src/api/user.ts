import axios from "axios";

interface userPropsType {
  accessToken: string;
}

export const getUserUrl = async ({ accessToken }: userPropsType) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return await axios.get("/user");
};

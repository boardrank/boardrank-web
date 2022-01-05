import axios from "axios";

export const getUserUrl = async () => {
  return await axios.get("/user");
};

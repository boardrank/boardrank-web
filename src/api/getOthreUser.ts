import axios from "axios";

export interface GetOtherUserUrlRequestType {
  id: number;
}

export const getOtherUserUrl = async (req: GetOtherUserUrlRequestType) => {
  return await axios.get(`/user/${req.id}`);
};

import { getOtherUserUrl } from "api/getOthreUser";
import React, { useEffect, useState } from "react";
import { userType } from "types/user";

const useOtherUser = (id: number) => {
  const [otherUserObj, setOtherUserObj] = useState<userType | null>(null);

  const otherUserInfo = async (id: number) => {
    try {
      const res = await getOtherUserUrl({ id });
      res !== null && setOtherUserObj(res.data.user);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    otherUserInfo(id);
  }, [id]);

  return otherUserObj;
};

export default useOtherUser;

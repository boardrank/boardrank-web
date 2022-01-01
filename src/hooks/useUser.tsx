import { getUserUrl } from "api/user";
import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { userType } from "types/user";

const useUser = () => {
  const { accessToken } = useSelector((state: RootStateOrAny) => ({
    accessToken: state.auth.accessToken,
  }));

  const [userObj, setUserObj] = useState<userType | null>();

  const userInfo = async () => {
    try {
      const res = accessToken !== "" ? await getUserUrl({ accessToken }) : null;
      res !== null ? setUserObj(res.data.user) : setUserObj(null);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    userInfo();
  }, [accessToken]);

  return { userObj };
};

export default useUser;

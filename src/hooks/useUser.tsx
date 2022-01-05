import { getUserUrl } from "api/user";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { userType } from "types/user";
import useAuthService, { getAxiosError } from "./useAuthService";

const useUser = () => {
  const { accessToken } = useSelector((state: RootStateOrAny) => ({
    accessToken: state.auth.accessToken,
  }));

  const { handleRefresh } = useAuthService();

  const [userObj, setUserObj] = useState<userType | null>();

  const userInfo = async () => {
    try {
      const res = accessToken ? await getUserUrl() : null;
      res !== null ? setUserObj(res.data.user) : setUserObj(null);
    } catch (error) {
      const axiosErrorData = getAxiosError(error);
      handleRefresh(userInfo, axiosErrorData?.errorCode);
      throw error;
    }
  };

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    userInfo();
  }, [accessToken]);

  return { userObj };
};

export default useUser;

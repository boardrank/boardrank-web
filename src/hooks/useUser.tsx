import { getUserUrl } from "api/user";
import localforage from "localforage";
import React, { useState } from "react";
import { userType } from "types/user";

const useUser = () => {
  const storage = localforage.createInstance({
    name: "_rf",
    driver: localforage.LOCALSTORAGE,
  });

  const [userObj, setUserObj] = useState<userType | null>();

  const userInfo = async () => {
    await storage.getItem("_tk", function (err, value) {
      try {
        const res = getUserUrl({ value });
        console.log("value: ", value);
        console.log(res);
      } catch (error) {
        throw error;
      }
    });
  };

  return { userInfo };
};

export default useUser;
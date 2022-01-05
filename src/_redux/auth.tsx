import axios from "axios";

const initialState = {
  accessToken: "",
};

const SIGN_IN = "auth/SIGN_IN" as const;
const SIGN_UP = "auth/SIGN_UP" as const;
const REFRESH = "auth/REFRESH" as const;
const LOG_OUT = "auth/LOG_OUT" as const;

export const signIn = (accessToken: string) => {
  return {
    type: SIGN_IN,
    accessToken,
  };
};

export const signUp = (accessToken: string) => {
  return {
    type: SIGN_UP,
    accessToken,
  };
};

export const refresh = (accessToken: string) => {
  return {
    type: REFRESH,
    accessToken,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
    case REFRESH:
      return { accessToken: action.accessToken };
    case LOG_OUT:
      return { accessToken: "" };
    default:
      return state;
  }
}

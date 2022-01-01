import { createStore } from "redux";

const initialState = {
  accessToken: "",
};

const SIGN_IN = "auth/SIGN_IN" as const;
const SIGN_UP = "auth/SIGN_UP" as const;
const LOG_OUT = "auth/LOG_OUT" as const;

export const signIn = (accessToken: string) => {
  return {
    type: SIGN_IN,
    accessToken,
  };
};

export const signUp = (accessToken: string) => ({
  type: SIGN_UP,
  accessToken,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_IN:
      return { accessToken: action.accessToken };
    case SIGN_UP:
      return { accessToken: action.accessToken };
    default:
      return state;
  }
}

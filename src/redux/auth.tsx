import { createStore } from "redux";

const initialState = {};

export const actionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_CANCEL: "LOGIN_CANCEL",
};

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
}

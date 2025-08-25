import { SET_EMAIL } from "../../constants/actionTypes";

export const setUserEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: {
      emailVerification: email,
    },
  };
};

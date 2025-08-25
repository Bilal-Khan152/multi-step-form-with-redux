import { SET_WARRANTY_DETAILS } from "../../constants/actionTypes";

export const setWarrantyDetails = (details) => {
  return {
    type: SET_WARRANTY_DETAILS,
    payload: details,
  };
};

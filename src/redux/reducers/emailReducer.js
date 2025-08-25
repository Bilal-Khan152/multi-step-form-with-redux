import { SET_EMAIL } from "../../constants/actionTypes";

const initialState = {
  emailVerification: null,
};

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

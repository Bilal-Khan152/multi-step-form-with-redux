import { SET_PACKAGE_TYPE } from "../../constants/actionTypes";

const initialState = {
  packageType: null,
};

export default function packageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PACKAGE_TYPE :
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

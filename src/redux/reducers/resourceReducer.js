import { SET_RESOURCE_TYPE } from "../../constants/actionTypes";

const initialState = {
  resourceType: null,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESOURCE_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

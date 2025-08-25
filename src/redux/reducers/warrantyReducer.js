import { SET_WARRANTY_DETAILS } from "../../constants/actionTypes";

const initialState = {
  previousSupplierWarranty: "",
  agreedSupplyPower: "",
};

export default function warrantyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WARRANTY_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

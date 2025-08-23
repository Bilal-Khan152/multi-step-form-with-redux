const initialState = {
  previousSupplierWarranty: "",
  agreedSupplyPower: "",
};

export default function warrantyReducer(state = initialState, action) {
  switch (action.type) {
    case "setWarrantyDetails":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

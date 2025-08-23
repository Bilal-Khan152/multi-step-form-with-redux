const initialState = {
  packageType: null,
};

export default function packageReducer(state = initialState, action) {
  switch (action.type) {
    case "setPackageType":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

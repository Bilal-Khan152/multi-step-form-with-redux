const initialState = {
  resourceType: null,
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case "setResourceType":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

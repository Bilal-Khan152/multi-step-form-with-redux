const initialState = {
  emailVerification: null,
};

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case "setEmail":
      return { ...state, ...action.payload  };
    default:
      return state;
  }
}

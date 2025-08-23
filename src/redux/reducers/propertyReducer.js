const initialState = {
  propertyType: "home",
  homeDetails: {},
  businessDetails: {},
  apartmentDetails: {},
};

export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case "setPropertyType":
      return { ...state, propertyType: action.payload };

    case "setHomeDetails":
      return {
        ...state,
        homeDetails: { ...state.homeDetails, ...action.payload },
        businessDetails: {},
        apartmentDetails: {},
      };

    case "setBusinessDetails":
      return {
        ...state,
        homeDetails: {},
        businessDetails: { ...state.businessDetails, ...action.payload },
        apartmentDetails: {},
      };

    case "setApartmentDetails":
      return {
        ...state,
        homeDetails: {},
        businessDetails: {},
        apartmentDetails: { ...state.apartmentDetails, ...action.payload },
      };

    default:
      return state;
  }
}

import {
  SET_PROPERTY_TYPE,
  SET_HOME_DETAILS,
  SET_BUSINESS_DETAILS,
  SET_APARTMENT_DETAILS,
} from "../../constants/actionTypes";

const initialState = {
  propertyType: "home",
  homeDetails: {},
  businessDetails: {},
  apartmentDetails: {},
};

export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROPERTY_TYPE:
      return { ...state, propertyType: action.payload };

    case SET_HOME_DETAILS:
      return {
        ...state,
        homeDetails: { ...state.homeDetails, ...action.payload },
        businessDetails: {},
        apartmentDetails: {},
      };

    case SET_BUSINESS_DETAILS:
      return {
        ...state,
        homeDetails: {},
        businessDetails: { ...state.businessDetails, ...action.payload },
        apartmentDetails: {},
      };

    case SET_APARTMENT_DETAILS:
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

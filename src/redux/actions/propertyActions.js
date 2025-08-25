import {
  SET_PROPERTY_TYPE,
  SET_HOME_DETAILS,
  SET_BUSINESS_DETAILS,
  SET_APARTMENT_DETAILS,
} from "../../constants/actionTypes";

export const setProperty = (type) => {
  return {
    type: SET_PROPERTY_TYPE,
    payload: type,
  };
};

export const setHomeDetails = (details) => {
  return {
    type: SET_HOME_DETAILS,
    payload: details,
  };
};

export const setBusinessDetails = (details) => {
  return {
    type: SET_BUSINESS_DETAILS,
    payload: details,
  };
};

export const setApartmentDetails = (details) => {
  return {
    type: SET_APARTMENT_DETAILS,
    payload: details,
  };
};

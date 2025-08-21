import { createStore } from "redux";

const initialalState = {
  homePage: {
    resourceType: null,
  },
  propertyPage: {
    propertyType: null,
    homeDetails: {},
    businessDetails: {},
    apartmentDetails: {},
  },
  package: {
    packageType: null,
  },
};

function formReducer(state = initialalState, action) {
  switch (action.type) {
    case "setResourceType":
      return {
        ...state,
        homePage: { ...state.homePage, ...action.payload },
      };

    case "setPropertyType":
      return {
        ...state,
        propertyPage: { ...state.propertyPage, propertyType: action.payload },
      };

    case "setHomeDetails":
      return {
        ...state,
        propertyPage: {
          ...state.propertyPage,
          interestType: "home",
          homeDetails: {
            ...state.propertyPage.homeDetails,
            ...action.payload,
          },
          businessDetails: {},
          apartmentDetails: {},
        },
      };

    case "setBusinessDetails":
      return {
        ...state,
        propertyPage: {
          ...state.propertyPage,
          interestType: "business",
          homeDetails: {},
          businessDetails: {
            ...state.propertyPage.businessDetails,
            ...action.payload,
          },
          apartmentDetails: {},
        },
      };

    case "setApartmentDetails":
      return {
        ...state,
        propertyPage: {
          ...state.propertyPage,
          interestType: "apartment",
          homeDetails: {},
          businessDetails: {},
          apartmentDetails: {
            ...state.propertyPage.apartmentDetails, // keep previous answers
            ...action.payload, // merge new ones
          },
        },
      };

    case "setPackageType":
      return {
        ...state,
        package: { ...state.package, ...action.payload },
      };

    default:
      return state;
  }
}

const loadState = () => {
  try {
    const savedState = localStorage.getItem("reduxState");
    return savedState ? JSON.parse(savedState) : initialalState;
  } catch (e) {
    console.error("Could not load state", e);
    return initialalState;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const store = createStore(
  formReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

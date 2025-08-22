import { createStore } from "redux";

const initialalState = {
  resource: {
    resourceType: null,
  },
  property: {
    propertyType: null,
    homeDetails: {},
    businessDetails: {},
    apartmentDetails: {},
  },
  package: {
    packageType: null,
  },
  warrantyCalculation: {
    previousSupplierWarranty: "",
    agreedSupplyPower: "",
  },
  emailVerification: {
    email: null,
  },
};

function formReducer(state = initialalState, action) {
  switch (action.type) {
    case "setResourceType":
      return {
        ...state,
        resource: { ...state.resource, ...action.payload },
      };

    case "setPropertyType":
      return {
        ...state,
        property: { ...state.property, propertyType: action.payload },
      };

    case "setHomeDetails":
      return {
        ...state,
        property: {
          ...state.property,

          homeDetails: {
            ...state.property.homeDetails,
            ...action.payload,
          },
          businessDetails: {},
          apartmentDetails: {},
        },
      };

    case "setBusinessDetails":
      return {
        ...state,
        property: {
          ...state.property,

          homeDetails: {},
          businessDetails: {
            ...state.property.businessDetails,
            ...action.payload,
          },
          apartmentDetails: {},
        },
      };

    case "setApartmentDetails":
      return {
        ...state,
        property: {
          ...state.property,

          homeDetails: {},
          businessDetails: {},
          apartmentDetails: {
            ...state.property.apartmentDetails,
            ...action.payload,
          },
        },
      };

    case "setPackageType":
      return {
        ...state,
        package: { ...state.package, ...action.payload },
      };

    case "setWarrantyDetails":
      return {
        ...state,
        warrantyCalculation: {
          ...state.warrantyCalculation,
          ...action.payload,
        },
      };

    case "setEmail":
      return {
        ...state,
        emailVerification: {
          ...state.emailVerification,
          ...action.payload,
        },
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

import { combineReducers } from "redux";
import resourceReducer from "./resourceReducer";
import propertyReducer from "./propertyReducer";
import packageReducer from "./packageReducer";
import warrantyReducer from "./warrantyReducer";
import emailReducer from "./emailReducer";


const rootReducer = combineReducers({
  resource: resourceReducer,
  property: propertyReducer,
  package: packageReducer,
  warrantyCalculation: warrantyReducer,
  emailVerification: emailReducer
});

export default rootReducer;
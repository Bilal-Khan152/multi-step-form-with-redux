import { SET_RESOURCE_TYPE } from "../../constants/actionTypes";


export const setResourceType = (type) => {
  return {
    type: SET_RESOURCE_TYPE,
    payload: {
      resourceType: type,
    },
  };
};

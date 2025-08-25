import { SET_PACKAGE_TYPE } from "../../constants/actionTypes"

export const setPackageResource = (type) => {
    return {
      type: SET_PACKAGE_TYPE ,
      payload: {
        packageType: type,
      },
    }
}
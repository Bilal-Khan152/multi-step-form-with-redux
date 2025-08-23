
export const setProperty = (type) => {
    return {
      type: "setPropertyType",
      payload: type,
    }
}


export const setHomeDetails = (details) => {
    return {
      type: "setHomeDetails",
      payload: details ,
    }
}

export const setBusinessDetails = (details) => {
    return {
      type: "setBusinessDetails",
      payload: details,
    }
    
}


export const setApartmentDetails = (details) => {
    return {
      type: "setApartmentDetails",
      payload: details ,
    }
}
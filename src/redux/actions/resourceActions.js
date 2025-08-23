export const setResourceType = (type) => {
  return {
    type: "setResourceType",
    payload: {
      resourceType: type,
    },
  };
};

export const setPackageResource = (type) => {
    return {
      type: "setPackageType",
      payload: {
        packageType: type,
      },
    }
}
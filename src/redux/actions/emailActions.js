export const setUserEmail = (email) => {
  // console.log("email in action" , email )
  return {
    type: "setEmail",
    payload:  {
      emailVerification : email
    }  ,
  };
};

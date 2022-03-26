import { GET_CURRENT_USER, REMOVE_CURRENT_USER } from "./types";

//GET user authenticated
export const authenticateUser = (account) => async (dispatch) => {
  let user = localStorage.getItem("userAddress");
  let userAddress = account;
  console.log("3. authenticating a new user");
  if (!user) {
    console.log("4. Address Not Available");
    localStorage.setItem("userAddress", userAddress);
  }
  dispatch({
    type: GET_CURRENT_USER,
    payload: userAddress,
  });
  return true;
};

//GET user authenticated
export const checkAuthenticated = (account) => async (dispatch) => {
  let user = localStorage.getItem("userAddress");
  let userAddress = account;

  if (user) {
    dispatch({
      type: GET_CURRENT_USER,
      payload: userAddress,
    });
    return true;
  } else {
    console.log("0. Address not in LocalStorage.");
    return false;
  }
};
//User signout
export const signOutUser = (address) => (dispatch) => {
  dispatch({
    type: REMOVE_CURRENT_USER,
    payload: address,
  });
  localStorage.removeItem("userAddress");
};

import axios from "axios";

const setAuthToken = token => {
  // if we have a token on our localStorage set it as a common header
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } // if there is no token delete the auth header
  else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;

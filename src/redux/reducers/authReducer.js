import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

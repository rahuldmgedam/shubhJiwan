import { UPDATE_PREFERENCES, FETCH_PREFERENCES } from "../types";

const initialState = {
  preferences: {},
};

export const preferencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PREFERENCES:
      return { ...state, preferences: action.payload };
    case UPDATE_PREFERENCES:
      return { ...state, preferences: { ...state.preferences, ...action.payload } };
    default:
      return state;
  }
};

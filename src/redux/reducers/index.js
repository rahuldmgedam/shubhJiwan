import { combineReducers } from "redux";
import { profilesReducer } from "./profilesReducer";
import { authReducer } from "./authReducer";
import { preferencesReducer } from "./preferencesReducer";

export const rootReducer = combineReducers({
  profiles: profilesReducer,
  auth: authReducer,
  preferences: preferencesReducer,

});

//  import { combineReducers } from "redux"
// import {profilesReducer} from "./profilesReducer"

// import {authReducer} from "./authReducer"


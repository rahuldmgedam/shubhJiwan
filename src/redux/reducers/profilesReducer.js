import { FETCH_PROFILES, FETCH_PROFILE_DETAILS, ADD_PROFILE } from "../types";

const initialState = {
  profiles: [],
  profileDetails: null,
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, profiles: action.payload };
    case FETCH_PROFILE_DETAILS:
      return { ...state, profileDetails: action.payload };
    case ADD_PROFILE:
      return { ...state, profiles: [...state.profiles, action.payload] };
    default:
      return state;
  }  
};

// import {FETCH_PREFERENCES, FETCH_PROFILE_DETAILS, FETCH_PROFILES} from "../types"
// const initialstate = {
//   profiles:[],
//  profileDetails:null}

//  export const profilesReducer = (state = initialstate,action)=>{
//   switch (action.type){
//     case FETCH_PROFILES:
//       return {...state,profiles: action.payload};
//     case FETCH_PROFILE_DETAILS:
//       return {...state,profileDetails:action.payload
//       };
//       case FETCH_PREFERENCES:
//         return {...state,profiles:[...state.profiles,action.payload]}
//       default:
//         return state;
//   }
//  }



// /

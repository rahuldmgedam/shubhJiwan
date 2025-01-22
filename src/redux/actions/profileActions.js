import { FETCH_PROFILES, FETCH_PROFILE_DETAILS, ADD_PROFILE } from "../types";

// Fetch all profiles
export const fetchProfiles = () => async (dispatch) => {
  try {
    // const response = await fetch("http://localhost:5000/profile/");
    const response = await fetch("https://shubh-backend-x8fa.onrender.com/profile/");

    const data = await response.json();
   
    dispatch({ type: FETCH_PROFILES, payload: data });
  } catch (error) {
    console.error("Error fetching profiles:", error);
  }
};

// Fetch single profile details
export const fetchProfileDetails = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://shubh-backend-x8fa.onrender.com/profile/${id}`)
    if(!response.ok){
      throw new Error(`Error: ${response.statusText}`) 
    }
    const data = await response.json();
    dispatch({type: FETCH_PROFILE_DETAILS, payload: data})
  } catch (error) {
    console.error("Error fetching profile details:", error);
  }
}
// export const fetchProfileDetails = (id) => async (dispatch) => {
//   try {
//     const response = await fetch(`/api/profiles/${id}`);
//     const data = await response.json();
//     dispatch({ type: FETCH_PROFILE_DETAILS, payload: data });
//   } catch (error) {
//     console.error("Error fetching profile details:", error);
//   }
// };

// Add new profile
export const addProfile = (profile) => async (dispatch) => {
  try {
    const response = await fetch("/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
    const data = await response.json();
    dispatch({ type: ADD_PROFILE, payload: data });
  } catch (error) {
    console.error("Error adding profile:", error);
  }
};

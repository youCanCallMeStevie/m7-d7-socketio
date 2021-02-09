import React, { useEffect } from "react";
import useReducerPersisted from "use-reducer-persisted";
import AppContext from "./app-context";
import appReducer from "./app-reducer";
import {
  getAllUsers,
  getCurrentUser,
  getCurrentProfile,
} from "../Lib/fetches/users";
import { login, logout } from "../Lib/fetches/auth";

//Import the strings which describe the action which i dispatch to the reducer. I need to put those string into variables to make sure there are no typos and that both reducer and AppState have exactly the same spelling
import { LOGIN, LOGOUT, UPDATE_PROFILE, SELECT_POST } from "./app-actions";

//1. We need to wrap our entire app withing this AppContext component so that all components will be able to access to the app contex state
//2. The way to have access to the appcontext state is using useContext. Look at

const AppState = (props) => {
  //this is our initial state. Since we are persisiting the data,
  //if we have some data in our local storage,
  //it's going to grab the state from there. Otherwise the initial state will be empty
  const initiaState = {
    ...JSON.parse(localStorage.getItem("linkedinState")),
  } || {
    currentUser: "",
  };

  //This is our persistent reducer which is a mutation of regular reducer (this one changes the state and also save the state into localstorage)
  //The main task of the reducer is to receive instructions from our contex api functions (which are in this file) and modify the state based on those instractions
  //The instructions are sent through the word dispacth. Dispatch carries an action type and a payload which is the data we
  //want to add to the state. If you check the reducer, you'll see that it accepts two parameters, one is the state, one is the action (sent from dispatch)
  const [state, dispatch] = useReducerPersisted(
    "linkedinState",
    appReducer,
    initiaState,
    "local"
  );

  useEffect(() => {
    retrieveAllUsers();
  }, []);
  //I gather in an action object all the actions I want my components to be able to have access to

  ///////////////CONTEXT API FUNCTIONS////////////////////////
  const loginUser = async (credentials) => {
    try {
      const auth = await login(credentials);
      const currentUser = await getCurrentUser();
      dispatch({
        type: LOGIN,
        payload: currentUser,
      });
      if (auth) return true;
    } catch (err) {
      console.log(err);
    }
  };
  const logoutUser = async () => {
    try {
      const auth = await logout();
      localStorage.clear();
      dispatch({
        type: LOGOUT,
      });
      if (auth) return true;
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveAllUsers = async () => {
    try {
      const users = await getAllUsers();
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };
  const retrieveCurrentProfile = async (id) => {
    try {
      const users = await getCurrentProfile(id);
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };

  const updateCurrentUser = async (id) => {
    try {
      const currentUser = await getCurrentUser();
      console.log(currentUser);
      dispatch({
        type: UPDATE_PROFILE,
        payload: currentUser,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const selectPost = async (post) => {
    try {
      dispatch({
        type: SELECT_POST,
        payload: post,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        appState: state,
        loginUser,
        logoutUser,
        updateCurrentUser,
        selectPost,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

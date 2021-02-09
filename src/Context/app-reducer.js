import { LOGIN, LOGOUT, UPDATE_PROFILE,SELECT_POST } from "./app-actions";

const appReducer = (state, { type, payload }) => {
  console.log(type);
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        currentUser: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        currentUser: "",
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        currentUser: payload,
      };
    case SELECT_POST:
      return {
        ...state,
       selectPost: payload,
      };
    default:
      return state;
  }
};

export default appReducer;

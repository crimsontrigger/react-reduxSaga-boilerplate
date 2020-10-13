import { combineReducers, Reducer } from "redux";

// import AuthReducer from "./auth.reducer";

const allReducers = {
  //   authStore: AuthReducer,
};

const rootReducer = combineReducers({ ...allReducers });

export default rootReducer;

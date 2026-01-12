import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/user.slice'
import JobList from './slices/user.slice'
import SignIn from './slices/user.slice'
import TechInterview from './slices/user.slice'
//import ThemeReducer from './slices/theme.slice'
import dbReducer from "./slices/db.slice";
import counterSliceReducer from "./slices/db.slice";

const rootReducer = combineReducers({
  user: UserReducer,
  db: dbReducer,
  joblisting:counterSliceReducer
  //  joblist: JobList,
  //signin : SignIn,
  //techinterview : TechInterview
});

const store = configureStore({
    reducer: rootReducer
})


export default store;
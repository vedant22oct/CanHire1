import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/user.slice'
import JobListReducer from './slices/joblist.slice'
import SignIn from './slices/user.slice'
import TechInterview from './slices/user.slice'
//import ThemeReducer from './slices/theme.slice'
//import dbReducer from "./slices/db.slice";
import itemReducer from "./slices/itemSlice";
//import { loadState, saveState } from "../utils/localStorage";
import dbPrasadData  from "./slices/dbPrasad.slice";

const rootReducer = combineReducers({
  user: UserReducer,
 // db: dbReducer,
  dbPrasad: dbPrasadData
  //items: itemReducer
  //signin : SignIn,
  //techinterview : TechInterview
});

const store = configureStore({
    reducer: rootReducer
})


export default store; 
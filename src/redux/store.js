import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/user.slice'
import JobListReducer from './slices/joblist.slice'
import SignIn from './slices/user.slice'
import TechInterview from './slices/user.slice'
//import itemReducer from "./slices/itemSlice";
import dbData from './slices/db.slice'  
import themReducer from './slices/theme.slice'  

const rootReducer = combineReducers({
  user: UserReducer,
 // db: dbReducer,
  db: dbData,
  theme: themReducer
  //items: itemReducer
  //signin : SignIn,
  //techinterview : TechInterview
});

const store = configureStore({
    reducer: rootReducer
})


export default store; 
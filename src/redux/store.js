import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/user.slice'
import JobList from './slices/user.slice'
import SignIn from './slices/user.slice'
import TechInterview from './slices/user.slice'
import { moduleRunnerTransform } from "vite";
//import ThemeReducer from './slices/theme.slice'

const rootReducer = combineReducers({
    user: UserReducer
    //joblist: JobList,
    //signin : SignIn,
    //techinterview : TechInterview 
})

const store = configureStore({
    reducer: rootReducer
})


export default store;
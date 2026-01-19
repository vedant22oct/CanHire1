import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light"
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;


/*import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import UserReducer from './slices/user.slice'
//import ThemeReducer from './slices/theme.slice'

const rootReducer = combineReducers({
    theme: ThemeReducer
})

const store = configureStore({
    reducer: rootReducer
})


export default store;
*/  
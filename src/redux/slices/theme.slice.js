import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
    layout: "grid",
    font: "Arial",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
    updateTheme: (state, action) => {
      state.mode = action.payload.mode;
      state.layout = action.payload.layout;
      state.font = action.payload.font;
    },
  },
});

export const { toggleTheme, setTheme, updateTheme } = themeSlice.actions;
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
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidates: [],
  jobs: [],
  applications: [],
  interviews: [],
  locations: [],
  desks: [],
  locationAssignments: [],
  laptops: [],
  equipmentAssignments: [],
  users: [],
};

export const counterSlice = createSlice({
  name: "db slice",
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.candidates.push(action.payload);
    },
  },
});

export const { addCandidate } = counterSlice.actions;

export default counterSlice.reducer;

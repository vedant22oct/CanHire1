import { createSlice } from "@reduxjs/toolkit";


const jobList ={
        job_id: 'j1',
        role: 'user',
        location: 'blr',
        job_filled: false
      }

const JobListReducer = createSlice({
    name: 'Job List Slice',
    initialState: {
        loading: false,
        error: null,
        jobList: [],
        jobListDetails: localStorage.getItem('jobListDetails') ?
            JSON.parse(localStorage.getItem('jobListDetails'))
            : {
                ...jobList
            }   
    },
    reducers: {
        getJobList(state, action) {
            return { ...state, jobList: action.payload }
        },
        addJobList(state, action) {
            //return { ...state, jobList: action.payload }
            state.jobList.push(action.payload);
        }
    }
})

export const { getJobList, addJobList } = JobListReducer.actions;
export default JobListReducer.reducer;
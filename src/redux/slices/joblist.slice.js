import { createSlice } from "@reduxjs/toolkit";


const jobList ={
        job_id: '',
        role: '',
        location: '',
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
        setJobList(state, action) {
            return { ...state, jobList: action.payload }
        }
    }
})

export const { setJobList } = JobListReducer.actions;
export default JobListReducer.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { addCandidate,addjob, getData }from './dbPrasad.slice';
import React, { use } from 'react';


  const  JobListData= getData().jobs;   
//   const candidatesData = data.candidates;
//   const applicationsData = data.applications;
//   const interviewsData = data.interviews;       

const initialState = {
    jobList: JobListData
    // candidatesList: candidatesData,
    // applicationsList: applicationsData,
    // interviewsList: interviewsData  
}; 


/*const initialState = {
   JobListData : [
        { job_id: 'j1', role: 'user', location: 'blr', job_filled: false },
        { job_id: 'j2', role: 'user', location: 'Chennai', job_filled: false },
        { job_id: 'j3', role: 'user', location: 'Hydrabad', job_filled: false }
    ],
};*/

const JobListReducer = createSlice({
    name: 'JobList',
    initialState,
    reducers: {
        getJobList(state, action) {
            return { ...state, jobList: action.payload }
        },
        addJobList(state, action) {
            //return { ...state, jobList: action.payload }
            state.jobList.push(action.payload);
        },
        removeJobList(state, action) {
            state.jobList = state.jobList.filter(job => job.job_id !== action.payload);
        }
    }
})

export const { getJobList, addJobList, removeJobList } = JobListReducer.actions;
export default JobListReducer.reducer;

/*
: {
        loading: false,
        error: null,
        jobList: [],
        jobListDetails: localStorage.getItem('jobListDetails') ?
            JSON.parse(localStorage.getItem('jobListDetails'))
            : {
                ...jobList
            }
    }
            */
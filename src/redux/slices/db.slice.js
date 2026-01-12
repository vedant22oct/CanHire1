import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidates: [],
  jobs: [ {
    "jobid": "Job001",
    "title": "Pega Developer",
    "location": "Virginia",
    "description": "Looking for a Pega developer with experience in constellation.",
    "company": "ABC Corp",
    "salary": "$100,000 - $110,000",
    "experience": "3-5 years",
    "JobType": "Full-time",
    "Job Description": "About the job This is a contract position. It is a 100% remote position.\n What will you do in this role?\n Work on major projects of complex scope and features. Leads the technical task of identifying, analyzing, designing, and maintaining PEGA solutions that align with documented business requirements and goals.\n Work as part of Business Process Digitalization Scrum delivery team to code/integrate solutions of quality, standards and/or design patterns, within planned sprint timelines\n",
    "Qualifications": "Bachelor's degree in Computer Science, Information Technology, or a related field. \n 3+ years of experience as a Pega Developer.\n Strong knowledge of Pega PRPC 7.x/8.x platform and its components.\n Experience in designing and implementing Pega applications using best practices.\n Familiarity with Agile/Scrum methodologies.\n Excellent problem-solving and communication skills."
  },
  {
    "jobid": "Job002",
    "title": "React Developer",
    "location": "California",
    "description": "Looking for a React developer with experience in modern web development.",
    "company": "XYZ Corp",
    "salary": "$90,000 - $110,000"
  }],
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
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },
    removeJob: (state,action) => {
      state.jobs = state.jobs.filter(job => job.jobid!==action.payload);
    }
  },
});

export const { addCandidate,addApplication } = counterSlice.actions;

//export const JobLists = (state) => state.jobs;

export default counterSlice.reducer;

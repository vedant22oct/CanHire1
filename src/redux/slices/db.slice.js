import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidates: [{
    "candidate_id": "CAND001",
    "name": "Arun Kumar",
    "email": "arun.kumar@example.com",
    "password": "123456"
  }, {
    "candidate_id": "CAND002",
    "name": "Ravi Kumar",
    "email": "ravi.kumar@example.com",
    "password": "6543212"
  }
  ],
  jobs: [{
    "job_id": "JOB101",
    "role": "Frontend Developer",
    "location": "Bangalore",
    "job_filled": false,
    "job_description": "Responsible for server-side web application logic and integration of the work front-end developers do.",
    "requirements": [
      { "id": 1, "requirement": "Proficiency in server-side languages such as Java, Python, Ruby, .NET, JavaScript, etc." },
      { "id": 2, "requirement": "Experience with database management and data modeling." },
      { "id": 3, "requirement": "Familiarity with RESTful API design and development." }
    ]
  },
  {
    "job_id": "JOB102",
    "role": "Backend Developer",
    "location": "Hyderabad",
    "job_filled": false,
    "job_description": "Responsible for server-side web application logic and integration of the work front-end developers do.",
    "requirements": [
      { "id": 1, "requirement": "Proficiency in server-side languages such as Java, Python, Ruby, .NET, JavaScript, etc." },
      { "id": 2, "requirement": "Experience with database management and data modeling." },
      { "id": 3, "requirement": "Familiarity with RESTful API design and development." }
    ]
  },
  {
    "job_id": "JOB103",
    "role": "Middleware Developer",
    "location": "Chennai",
    "job_filled": false,
    "job_description": "Responsible for server-side web application logic and integration of the work front-end developers do.",
    "requirements": [
      { "id": 1, "requirement": "Proficiency in server-side languages such as Java, Python, Ruby, .NET, JavaScript, etc." },
      { "id": 2, "requirement": "Experience with database management and data modeling." },
      { "id": 3, "requirement": "Familiarity with RESTful API design and development." }
    ]
  }],
  applications: [{
    "application_id": "APP001",
    "candidate_id": "CAND001",
    "job_id": "JOB101",
    "applied_on": "2026-01-05",
    "status": "IN_PROGRESS"
  },
  {
    "application_id": "APP002",
    "candidate_id": "CAND002",
    "job_id": "JOB102",
    "applied_on": "2026-01-05",
    "status": "FILLED"
  }],
  interviews: [{
    "interview_id": "INT001",
    "application_id": "APP001",
    "type": "TECHNICAL",
    "decision": "PASS",
    "comments": "Strong React and JavaScript fundamentals",
    "interviewed_on": "2026-01-06"
  },
  {
    "interview_id": "INT002",
    "application_id": "APP002",
    "type": "MANAGER",
    "decision": "APPROVED",
    "comments": "Good communication and team fit",
    "interviewed_on": "2026-01-07"
  }],
  locations: [{
    "location_id": "LOC01",
    "city": "Bangalore",
    "bdc": "Whitefield BDC"
  },
  {
    "location_id": "LOC02",
    "city": "Chennai",
    "bdc": "Tambaram BDC"
  },
  {
    "location_id": "LOC03",
    "city": "Hyderabad",
    "bdc": "Gachibowli BDC"
  }],
  desks: [{
    "desk_id": "DESK45",
    "location_id": "LOC01",
    "desk_no": "45"
  }],
  locationAssignments: [{
    "assignment_id": "LA001",
    "candidate_id": "CAND001",
    "job_id": "JOB101",
    "desk_id": "DESK45",
    "start_date": "2026-02-01"
  }],
  laptops: [{
    "laptop_id": "LAP1001",
    "name": "Dell Latitude 5430",
    "expire_date": "2029-02-01"
  }],
  equipmentAssignments: [{
    "assignment_id": "EA001",
    "candidate_id": "CAND001",
    "laptop_id": "LAP1001",
    "start_date": "2026-02-01"
  }],
  users: [{
    "currentUserRole": "HR",
    "activeCandidateId": "CAND001",
    "activeJobId": "JOB101",
    "currentStep": "EQUIPMENT_ASSIGNMENT",
    "loading": false
  }, {
    "currentUserRole": "Manager",
    "activeCandidateId": "CAND002",
    "activeJobId": "JOB102",
    "currentStep": "EQUIPMENT_ASSIGNMENT",
    "loading": false
  }],
};

export const dbData = createSlice({
  name: "dbData",
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.candidates.push(action.payload);
    },
    getApplicationsByCandidate: (state, action) => {
      return state.applications.filter(app => app.candidate_id === action.payload.candidate_id);
    },
    addjob: (state, action) => {
      state.jobs.push(action.payload);
    },
    removeJobList: (state, action) => {
      state.jobs = state.jobs.filter(job => job.job_id !== action.payload.job_id);
    },
    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },
    removeApplication: (state, action) => {
      state.applications = state.applications.filter(app => app.application_id !== action.payload.application_id);
    },
    addLocaionAssignment: (state, action) => {
      state.locationAssignments.push(action.payload);
    },
  }});

//export const { addCandidate } = counterSlice.actions;

export const { addCandidate, addjob, getData, removeJobList, addApplication, removeApplication, getApplicationsByCandidate } = dbData.actions;

export default dbData.reducer;

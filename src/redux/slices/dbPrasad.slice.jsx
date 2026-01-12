import { createSlice } from "@reduxjs/toolkit";

/*const initialState = {
  jobs: [
    { id: 1, title: 'Learn Redux Toolkit', status: 'Completed' },
    { id: 2, title: 'Build a React App', status: 'In Progress' },
    { id: 3, title: 'Master Clean Code', status: 'Pending' }
  ],
};*/


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
    "job_filled": false
  },
  {
    "job_id": "JOB102",
    "role": "Backend Developer",
    "location": "Hyderabad",
    "job_filled": false
  },
  {
    "job_id": "JOB103",
    "role": "Middleware Developer",
    "location": "Chennai",
    "job_filled": false
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
  laptops: [    {
        "laptop_id": "LAP1001",
        "name": "Dell Latitude 5430",
        "expire_date": "2029-02-01"
      }],
  equipmentAssignments: [ {
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
        },{
            "currentUserRole": "Manager",
            "activeCandidateId": "CAND002",
            "activeJobId": "JOB102",
            "currentStep": "EQUIPMENT_ASSIGNMENT",
            "loading": false
        }],
};


export const dbPrasadData = createSlice({
  name: "dbData",
  initialState ,
  reducers: {
    addCandidate: (state, action) => {
      state.candidates.push(action.payload);
    },
    addjob: (state, action) => {
      state.jobs.push(action.payload);
    },
    getData: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

export const { addCandidate,addjob, getData } = dbPrasadData.actions;

export default dbPrasadData.reducer;


// export const { addItem, removeItem } = itemSlice.actions;
// export default itemSlice.reducer;
import React from 'react'
//import { addCandidate } from '../../redux/slices/db.slice'
import {  useSelector } from 'react-redux';
import {Link} from "react-router";


function JobList() {
  const JobLists = useSelector(State => State.joblisting.jobs);
 //const dispatch = useDispatch();
  console.log("test "+JobLists);
  return (
    <div>
      <h1>Jobs Listing Page</h1>
      {
        JobLists.map((job) => (
          <div key={job.jobid} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h2><Link to ={job.jobid}>{job.title}</Link></h2>
            <p>Company: {job.company}</p>
            <p>Description: {job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
          </div>
        ))}
      
    </div>
  )
}

export default JobList
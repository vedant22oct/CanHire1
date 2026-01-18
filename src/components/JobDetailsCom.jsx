
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment, useState } from "react";
import { addApplication } from "../redux/slices/db.slice";

function JobDetailsCom() {
  const { job_id } = useParams();
  const [isJobSubmitted, setIsJobSubmitted] = useState(false);

  const jobs = useSelector((state) => state.db.jobs);
  const dispatch = useDispatch();
  const job = jobs.find((job) => job.job_id === job_id) || {};

  //const { job_description, requirements = [] } = job; 
  function handleClick() {
    dispatch(addApplication({
      "application_id": `APP${Math.floor(Math.random() * 1000)}`,
      "candidate_id": "CAND001",
      "job_id": job_id,
      "applied_on": new Date().toISOString().split('T')[0],
      "status": "APPLIED"
    }));
    console.log("Application submitted for job ID:", job_id);
    setIsJobSubmitted(true);
  }
  if (isJobSubmitted) {
    return (
      <Fragment>
        <h1 className="page-title">Job Details Page</h1>
        <p>Details for Job ID: {job_id}</p>
        <div>
          <h2>Your application has been submitted successfully!</h2>
        </div>
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        <h1 className="page-title">Job Details Page</h1>
        <p>Details for Job ID: {job_id}</p>
        <div>
          <Fragment>
            <p>Job Description - {job.job_description}</p>
            <p>Location - {job.location}</p>
            <h3>Requirements:</h3>
            <div>
              <ul>
                {job.requirements.map((req) => (
                  <li key={req.id}>{req.requirement}</li>
                ))}
              </ul>
            </div>
          </Fragment>
          <button onClick={handleClick}>Apply Now</button>
        </div>

      </Fragment>
    );
  }
}

export default JobDetailsCom;  

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { NavLink } from 'react-router';
//import {  removeJobList } from '../redux/slices/db.slice'; 
import { removeJobList, addjob} from '../redux/slices/db.slice';
import JobAddChild from './JobAddCom';



const JobListView = () => {
  const jobs = useSelector((state) => state.db.jobs);
  const dispatch = useDispatch();

  const handleRemoveJob = (job_id) => {
    dispatch(removeJobList({ job_id }));
  };

  const handleAddJob = (job) => {
    // Dispatch an action to add the job
    // dispatch({ type: 'ADD_JOB', payload: job });
    return <JobAddChild onData={handleChildData} />;
    console.log('Add job:', job);

  };

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        <h1>Available job to apply </h1>
        <Container className='mt-4'>
          <Tabs defaultActiveKey="Candidate"
            id="controlled-tab-example"
            className="mb-3">
            <Tab eventKey="jobs" title="Jobs">
              <div>
                <h3>Job Openings</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {jobs.map((job) => (
                    <li key={job.job_id} style={{
                      borderBottom: '1px solid #ddd',
                      padding: '10px 0',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>

                      <strong>{job.job_id}</strong> <strong>{job.role}</strong> — {job.location}
                      <h2><NavLink to={`/joblist/${job.job_id}`}>Details</NavLink></h2>
                      <span>
                        <button
                          onClick={() => handleAddJob(job)}
                          style={{ color: 'red', cursor: 'pointer' }}
                        >
                          Add
                        </button>
                         <button
                          onClick={() => dispatch(addJobList(job.job_id))}
                          style={{ color: 'red', cursor: 'pointer' }}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleRemoveJob(job.job_id)}
                          style={{ color: 'red', cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </span>

                    </li>
                  ))}
                </ul>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </ul>
    </div>

  )
}

export default JobListView;



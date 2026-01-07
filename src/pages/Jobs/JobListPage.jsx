import React from 'react'
import { Fragment, useState } from 'react'
import JobList from '../../components/JobListCom' 

function c() {

  const [jobs, setUsers] = useState([]);

  return (
    <Fragment>
        <h1 className='page-title'>This is my Job List!</h1>
        <JobList jobs={jobs} />
    </Fragment>
  )
}

export default JobList


//  <JobList jobs={jobs} setJobs={setUsers} />
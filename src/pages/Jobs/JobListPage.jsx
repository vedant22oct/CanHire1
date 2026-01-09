import React from 'react'
import { Fragment, useState } from 'react'
//import JobList from '../../components/JobListCom' 
import ItemListView from '../../components/JobListCom'


function JobList() {

  const [jobs, setUsers] = useState([]);

  return (
    <Fragment>
        <h1 className='page-title'>This is my Job List!</h1>
        <ItemListView />
    </Fragment>
  );
};

export default JobList

//<JobList jobs={jobs} />
//  <JobList jobs={jobs} setJobs={setUsers} />
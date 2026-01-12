import React from 'react'
import { Fragment, useState } from 'react'
import JobList from '../../components/JobListCom' 
import ItemListView from '../../components/ItemListView'


function JobListPage() {

  const [jobs, setUsers] = useState([]);

  return (
    <Fragment>
        <h1 className='page-title'>This is my Job List!</h1>
        <JobList />

    </Fragment>
  );
};

export default JobListPage

//<JobList jobs={jobs} />
// <ItemListView />
//  <JobList jobs={jobs} setJobs={setUsers} />
// databale
import React, { use } from 'react';
//import { getJobList, addJobList } from '../redux/slices/joblist.slice';  
//import { removeItem } from '../redux/slices/itemSlice';   
import { getJobList, addJobList, removeJobList } from '../redux/slices/joblist.slice';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Tab, Container } from 'react-bootstrap';

const JobListView = () => {
  const jobs = useSelector((state) => state.joblist.JobListData);
  const dispatch = useDispatch();
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
                      <span>
                       <strong>{job.job_id}</strong> <strong>{job.role}</strong> — {job.location}
                      </span>
                      <span>
                        <button
                          onClick={() => dispatch(addJobList(job.job_id))}
                          style={{ color: 'red', cursor: 'pointer' }}
                        >
                          Add
                        </button>
                        <button
                          onClick={() => dispatch(removeJobList(job.job_id))}
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
/*

 <Tab eventKey="Apply Job" title="Apply Jobs">
              <div>
                <h3>Applied Jobs</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {jobs.filter(job => job.applied).map((job) => (
                    <li key={job.job_id} style={{
                      borderBottom: '1px solid #ddd',
                      padding: '10px 0',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <span>
                        <strong>{job.role}</strong> — {job.location} - {job.job_filled ? 'false' : 'Open'    }
                      </span>
                      <button
                        onClick={() => dispatch(removeJobList(job.job_id))}
                        style={{ color: 'red', cursor: 'pointer' }}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>  
            </Tab>

///tab end 
  <span>
                              <strong>{job.role}</strong> — {job.location}
                            </span>
                            <button 
                              onClick={() => dispatch(removeJobList(job.job_id))}
                              style={{ color: 'red', cursor: 'pointer' }}
                            >
                              Delete
                            </button>


const ItemListView = () => {
  // Accessing the 'data' array from the 'items' slice
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();
return (
//
{jobs.map((job) => (
                        <li key={job.id}>
                            {job.role} - {job.location}
                            <button onClick={() => dispatch(removeItem(job.id))}>
                                Remove
                            </button>
                        </li>
                    ))}
//

    <div>
                <h2>Item List</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.title} - {item.status}
                            <button onClick={() => dispatch(removeItem(item.id))}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

                <Container className='mt-4'>
                <Tabs defaultActiveKey="items" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="items" title="Items">
                    <div>
                      <h3>Project Tasks</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {items.map((item) => (
                          <li key={item.id} style={{ 
                            borderBottom: '1px solid #ddd', 
                            padding: '10px 0',
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}>
                            <span>
                              <strong>{item.title}</strong> — {item.status}
                            </span>
                            <button 
                              onClick={() => dispatch(removeItem(item.id))}
                              style={{ color: 'red', cursor: 'pointer' }}
                            >
                              Delete
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tab>
                </Tabs> 
                </Container>
            </div>
)
}*/
/* return (
   <div style={{ padding: '20px', maxWidth: '400px' }}>
     <h3>Project Tasks</h3>
     <ul style={{ listStyle: 'none', padding: 0 }}>
       {items.map((item) => (
         <li key={item.id} style={{ 
           borderBottom: '1px solid #ddd', 
           padding: '10px 0',
           display: 'flex',
           justifyContent: 'space-between'
         }}>
           <span>
             <strong>{item.title}</strong> — {item.status}
           </span>
           <button 
             onClick={() => dispatch(removeItem(item.id))}
             style={{ color: 'red', cursor: 'pointer' }}
           >
             Delete
           </button>
         </li>
       ))}
     </ul>
   </div>
 );/*
};

//function JobList(){

  /* function ItemListView (){
       const itemList = useSelector((state) => state.items.list);
       const dispatch = useDispatch();
       return (
           <div>
               <h2>Item List</h2>
               <ul>
                   {itemList.map((item) => (
                       <li key={item.id}>
                           {item.title} - {item.status}
                           <button onClick={() => dispatch(removeItem(item.id))}>
                               Remove
                           </button>
                       </li>
                   ))}
               </ul>
           </div>
       );  

   }*/
//cosnt jobs = getJobList();
/*  const jobs = getJobList((state)=>state.joblist );
      const dispatch = useDispatch();

  const handleAddJob = (newJob) => {
      dispatch(addJobList(newJob));
  };

  return (<>
  <h1>Job List Component</h1>
  </>)*/
//}

/*
function JobList({jobs}) {
    return (
        <div className="job-list">
        {
          jobs.map((job) => (
            <div className="user">
              <h4>{job.job_id}</h4>
              <p>{job.role}</p>
              <p>{job.location}</p>
              <p>{job.job_filled}</p>
            </div>
          ))
        }
      </div>
    )
}*/
export default JobListView;


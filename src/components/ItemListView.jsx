// databale
import React, { use } from 'react';
//import { getJobList, addJobList } from '../redux/slices/joblist.slice';  
import { removeItem } from '../redux/slices/itemSlice';   
import { useSelector, useDispatch } from 'react-redux'; 
import { Tabs, Tab, Container } from 'react-bootstrap';


const ItemListView = () => {
  // Accessing the 'data' array from the 'items' slice
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();
return (
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
}
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
export default ItemListView;


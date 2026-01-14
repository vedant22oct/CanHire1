
import { useParams   } from "react-router";
import {useSelector, useDispatch} from 'react-redux';    
import React, { Fragment } from "react";
import JobDetailsCom from "../../components/JobDetailsCom";

function JobDetailsPage() {
  const { job_id } = useParams();

  return (
    <Fragment>
      <h1 className="page-title">Job Details Page</h1>
      <JobDetailsCom />
    </Fragment>
  );
}

export default JobDetailsPage;  
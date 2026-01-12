
import { useParams   } from "react-router";
import {useSelector, useDispatch} from 'react-redux';    
import React, { Fragment } from "react";

function JobDetailsCom() {
  const { job_id } = useParams();

  return (
    <Fragment>
      <h1 className="page-title">Job Details Page</h1>
      <p>Details for Job ID: {job_id}</p>
    </Fragment>
  );
}

export default JobDetailsCom;  
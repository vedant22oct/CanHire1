import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { addApplication } from '../../redux/slices/db.slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function JobDetailsPage() {

    const [JobSub, setJob] = useState("false");
    const Application = {
        "cand_id": "",
        "cand_name": "",
        "cand_email": "",
        "jod_id": ""
    }

    //const [productData, setData] = useState({});
    const dispatch = useDispatch();
    const { jobid } = useParams();
    const jobs = useSelector(State => State.joblisting.jobs);

    //const { data: productData } = useFetch(`/products/${id}`);

    const job = jobs.find((job) => job.jobid == jobid);
    const title = job ? job.title : 'Job Not Found';
    const company = job ? job.company : 'N/A';
    const description = job ? job.description : 'N/A';
    const location = job ? job.location : 'N/A';
    const salary = job ? job.salary : 'N/A';

    function ApplyJob() {

        dispatch(addApplication({
            payload: {
                "cand_id": "Cand001",
                "cand_name": "Test",
                "cand_email": "test@mail.com",
                "jod_id": { jobid }
            }

        }))
       // JobSub = "true";
        setJob("true");

    }



    if (JobSub == "false") {
        return (

            <div>
                Job Detail Page for job ID: {jobid}
                <h2>{title}</h2>
                <p>Company: {company}</p>
                <p>Description: {description}</p>
                <p>Location: {location}</p>
                <p>Salary: {salary}</p>
                <p>Job Description:
                    {job?.["Job Description"]}</p>
                <p>Qualifications: {job?.Qualifications}</p>
                <button onClick={ApplyJob}>Apply</button>
            </div>)

    }
    else {
        return (
            <p>Application Submitted</p>)
    }




}
export default JobDetailsPage;
import { useSelector } from "react-redux";
import { useMemo } from 'react';

export function useFetchJobById(jobId) {
    const jobs = useSelector(state => state.joblisting.jobs);
    const job = useMemo(() => jobs.find((job) => job.jobid == jobId), [jobId, jobs]);
    return job;
}


export function useApplicationMatch(jodid, candid) {
    const applications = useSelector(state => state.db.applications);
    const application = applications.find(appObj => (appObj.cand_id == candid) && (appObj.job_id == jodid))
    if (application) {
        return true;
    }
    return false;

}
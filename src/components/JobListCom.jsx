// databale

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
}
export default JobList;


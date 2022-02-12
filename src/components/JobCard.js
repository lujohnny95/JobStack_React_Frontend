import React from 'react'

const JobCard = ({ job }) => {
  return (
    <div className='job-card'>
        <div className='job-details'>
            <h4>{job.title}</h4>
            <h5>{job.company.display_name} | {job.salary_min}</h5>
            <p>{job.description}</p>
        </div>
    </div>
  )
}

export default JobCard;
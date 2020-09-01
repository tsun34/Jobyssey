import React from 'react';
import { Link } from "react-router-dom";



const JobIndexItem = ({ job }) => (
    <ul className='job-index-item'>
        <Link to={`/jobs/${job.id}`}>
            <span>company_name: {job.company_name}</span>
            <span>position_name: {job.position_name}</span>
            <span>stage: {job.stage}</span>
            <span>{job.application_link}</span>
            <span>{job.salary}</span>
            <span>{job.location}</span>
            <span>{job.deadline}</span>
            <span>{job.date_applied}</span>
            <span>{job.interview_date}</span>
            <span>{job.decision_date}</span>
            <span>{job.decision}</span>
            <span>{job.notes}</span>
            <span>{job.networking_contacts}</span>
            <span>{job.studying_preparation}</span>
        </Link>
    </ul>
);

export default JobIndexItem;
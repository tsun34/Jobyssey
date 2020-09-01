import React from 'react';
import { Link } from "react-router-dom";



class JobIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='job-index-item'>
            <ul>
                    <li>company_name: 
                        {/* {job.company_name} */}
                    </li>
                    <li>position_name: 
                        {/* {job.position_name} */}
                    </li>
                    <li>stage: 
                        {/* {job.stage} */}
                    </li>
                    <li>application_link: 
                        {/* {job.application_link} */}
                    </li>
                    <li>salary:
                        {/* {job.salary} */}
                    </li>
                    {/* <span>{job.location}</span>
                    <span>{job.deadline}</span>
                    <span>{job.date_applied}</span>
                    <span>{job.interview_date}</span>
                    <span>{job.decision_date}</span>
                    <span>{job.decision}</span>
                    <span>{job.notes}</span>
                    <span>{job.networking_contacts}</span>
                    <span>{job.studying_preparation}</span> */}
                    {/* <p>hello</p> */}
            </ul>
        </div>
        )
    }
}

export default JobIndexItem;
import React from 'react';
import { Link } from "react-router-dom";
import '../../css/job_index_item.css'



class JobIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className='job-index-item'>
                <ul >
                    <li className='li-details'>company_name: 
                        {/* {job.company_name} */}
                    </li >
                    <li className='li-details'>position_name: 
                        {/* {job.position_name} */}
                    </li>
                    <li className='li-details'>stage: 
                        {/* {job.stage} */}
                    </li>
                    <li className='li-details'>application_link: 
                        {/* {job.application_link} */}
                    </li>
                    <li className='li-details'>salary:
                        {/* {job.salary} */}
                    </li>
                    <li className='li-details'>
                        location: 
                        {/* {job.location} */}
                    </li>
                    <li className='li-details'>
                        deadline: 
                        {/* {job.deadline} */}
                    </li>
                    <li className='li-details'>
                        date_applied: 
                        {/* {job.date_applied} */}
                    </li>
                    <li className='li-details'>
                        interview_date: 
                        {/* {job.interview_date} */}
                        </li>
                    <li className='li-details'>decision_date:
                        {/* {decision_date: job.decision_date} */}
                    </li>
                    <li className='li-details'>job.decision:
                        {/* {decision: job.decision} */}
                    </li>
                    <li className='li-details'>notes:
                        {/* {notes: job.notes} */}
                        </li>
                    <li className='li-details'>networking_contacts:
                        {/* {networking_contacts: job.networking_contacts} */}
                        </li>
                    <li className='li-details'>studying_preparation:
                        {/* {studying_preparation: job.studying_preparation} */}
                        </li>
            </ul>
        </div>
        )
    }
}

export default JobIndexItem;
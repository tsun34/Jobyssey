import React from 'react';
import '../../css/job_index_item.css'

class JobIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const job = this.props.job
        return (
        <div className='job-index-item'>
                <ul >
                    <li className='li-details'>company_name: 
                        {job.company_name}
                    </li >
                    <li className='li-details'>position_name: 
                        {job.position_name}
                    </li>
                    <li className='li-details'>stage: 
                        {job.stage}
                    </li>
                    <li className='li-details'>application_link: 
                        {job.application_link}
                    </li>
                    {
                        job.salary && 
                        <li className='li-details'>salary:
                            {job.salary}
                        </li>
                    }
                    {
                        job.location &&
                        <li className='li-details'>location:
                            {job.location}
                        </li>
                    }

                    {
                        job.deadline &&
                        <li className='li-details'>deadline:
                            {job.deadline}
                        </li>
                    }
                    
                    {
                        job.date_applied &&
                        <li className='li-details'>date_applied:
                            {job.date_applied}
                        </li>
                    }

                    {
                        job.interview_date &&
                        <li className='li-details'>interview_date:
                            {job.interview_date}
                        </li>
                    }

                    {
                        job.decision_date &&
                        <li className='li-details'>decision_date:
                            {job.decision_date}
                        </li>
                    }
                    
                    {
                        job.decision &&
                        <li className='li-details'>decision:
                            {job.decision}
                        </li>
                    }

                    {
                        job.notes &&
                        <li className='li-details'>notes:
                            {job.notes}
                        </li>
                    }

                    {
                        job.networking_contacts &&
                        <li className='li-details'>networking_contacts:
                            {job.networking_contacts}
                        </li>
                    }
                    
                    {
                        job.studying_preparation &&
                        <li className='li-details'>studying_preparation:
                            {job.studying_preparation}
                        </li>
                    }
                    
            </ul>
        </div>
        )
    }
}

export default JobIndexItem;
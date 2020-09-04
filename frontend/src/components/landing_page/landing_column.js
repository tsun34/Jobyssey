import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/landing-page.css';
import LandingCompanyContainer from './landing_company_container';
import { getRandomBackgroundColor } from '../../util/general_util';

class LandingColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSortedByDate: false
        }
        this.onSortByDateButtonClick = this.onSortByDateButtonClick.bind(this)
    }

    onSortByDateButtonClick() {
        this.setState({
            isSortedByDate: !this.state.isSortedByDate
        })
    }

    renderLandingCompanyContainer(job) {
        return <LandingCompanyContainer backgroundColor={getRandomBackgroundColor()} job={job}key={job._id} />
    }

    render() {
        const { title, jobs } = this.props;
        return (
        <div className="landing-column">
            <div className="landing-column-title">{title}</div>
            <div className="landing-column-subtitle">{`${jobs.length} JOBS`}</div>
            <button className="landing-add-job-block" onClick = {this.onSortByDateButtonClick} >
                { this.state.isSortedByDate ?  "Sort by Default" : "Sort by Deadline" }
            </button>
            { (this.state.isSortedByDate ? 
                [...jobs].sort((a,b) => (a.deadline > b.deadline ) ? 1 : -1) : jobs)
                .map(job => this.renderLandingCompanyContainer(job))}
        </div>);
    }
}

export default LandingColumn;
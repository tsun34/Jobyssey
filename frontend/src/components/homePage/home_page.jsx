import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pics/jobyssey_logo.png'
import '../../css/homepage.css'
import test1 from '../../pics/test1.png'
import personal_job_task from '../../pics/personal_job_task.png'
import visual from '../../pics/visual.png'
import explore from '../../pics/explore.png' 

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onLogInClick = this.onLogInClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
    }

    onLogInClick() {
        this.props.openModal('sign_in');
    }

    onSignUpClick() {
        this.props.openModal('sign_up');
    }

    render() {
    return <div>
        <nav className='home-nav'>
            <ul className='home-nav-info'>
                <li><Link to='/'> <img className='home-nav-logo' src={logo} alt="logo"/></Link></li>          
            </ul>
            <ul className='home-nav-session'>
                <li>
                    <button className='home-nav-session-button' onClick={this.onSignUpClick}>Sign Up</button>
                </li>
                <li>
                    <button className='home-nav-session-button' onClick={this.onLogInClick}>Log In</button>
                </li>
            </ul>
        </nav>

        <section className='jobyssey-home-section'>
            <div>
                <h1 className='jobyssey-home-title'>Jobyssey helps you to presue your goal</h1>
                <span className='jobyssey-home-body'>Stay on track</span>
                <p className='jobyssey-home-note'>Need to create an account? <Link to="/login" className='slant-home-note-link'> Get started</Link></p>
            </div>
            <img className='jobyssey-home-img' src={test1} alt='jobyssey homepage'/>
        </section>  

        <section className='personal-task-section'>
            <div>
                <img className='jobyssey-task-img' src={personal_job_task} alt='jobyssey homepage' />
                <span className='jobyssey-task-text'>
                    <h1>Stay organized</h1>
                    <span className='jobyssey-task-note'>
                        Jobyssey keeps track of every detail of your job application from application deadline and job description to networking contacts and preparation notes. 
                    </span>
                </span>
            </div>
        </section>
        <section className='personal-task-section'>
            <div>
                <span className='jobyssey-task-text'>
                    <h1>Visual your success</h1>
                    <span className='jobyssey-task-note'>
                        Jobyseey incorporates the d3-sankey library and generates personalized sankey diagrams to easily visualize the progress of job searching you have accomplished. 
                    </span>
                </span>
                <img className='jobyssey-task-img' src={visual} alt='jobyssey homepage' />
            </div>
        </section>
        <section className='personal-task-section'>
            <div>
                <img className='jobyssey-task-img' src={explore} alt='jobyssey homepage' />
                <span className='jobyssey-task-text'>
                    <h1>Share your experience</h1>
                    <span className='jobyssey-task-note'>
                        Jobyssey is a safe place for job seekers to share their interviewing experiences. Users can search and view other job seekers’ experience at different companies.
                    </span>
                </span>
            </div>
        </section>
        <div className='footer'>
                <Link to='/'> <img className='footer-logo' src={logo} alt="logo" /></Link>
            <div className='footer-content'>
                <p>About</p>
                <p>Privacy & Terms</p>
                <p>Question?</p>
                <p>Manage your account and privacy</p>
            </div>

        </div>
    </div>
    }
};

export default HomePage;
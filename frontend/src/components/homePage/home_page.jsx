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

    onBackToTopClick() {
        window.scrollTo(0, 0)
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
                <p className='jobyssey-home-note' >Need to create an account? <span onClick={this.onSignUpClick} className='jobyssey-home-note-link'> Get started</span></p>
            </div>
            <img className='jobyssey-home-img' src={test1} alt='jobyssey homepage'/>
        </section>  

        <section className='personal-task-section'>
            <div className='jobyssey-home-box'>
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
            <div className='jobyssey-home-box'>
                <span className='visual-task-text'>
                    <h1>Visual your success</h1>
                    <span className='jobyssey-task-note'>
                        Jobyseey incorporates the d3-sankey library and generates personalized sankey diagrams to easily visualize the progress of job searching you have accomplished. 
                    </span>
                </span>
                <img className='jobyssey-visual-img' src={visual} alt='jobyssey homepage' />
            </div>
        </section>
        <section className='personal-task-section'>
            <div className='jobyssey-home-box'>
                <img className='jobyssey-task-img' src={explore} alt='jobyssey homepage' />
                <span className='jobyssey-task-text'>
                    <h1>Explore & Share</h1>
                    <span className='jobyssey-task-note'>
                        Jobyssey is a safe place for job seekers to share their interviewing experiences. Users can search and view other job seekers’ experience at different companies.
                    </span>
                </span>
            </div>
        </section>
        <div className='footer'>
            <div className='footer-content' >
                <span>About</span>
                <span>Privacy & Terms</span>
                <span>Question?</span>
                <span>Manage your account and privacy</span>
            </div>
            <Link to='/'> <img className='footer-logo' src={logo} alt="logo" /></Link>
            <div>
                <button className='back-to-top-btn' onClick={this.onBackToTopClick}> Back To Top</button>
            </div>
        </div>
    </div>
    }
};

export default HomePage;
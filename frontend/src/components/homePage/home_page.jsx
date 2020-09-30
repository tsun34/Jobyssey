import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../pics/jobyssey-logo.png";
import homeImg1 from "../../pics/1.png";
import homeImg2 from "../../pics/2.png";
import homeImg3 from "../../pics/3.png";
import homeImg4 from "../../pics/4.png";
import homeImg5 from "../../pics/5.png";
import homeImg6 from "../../pics/6.png";

import '../../css/homepage.css'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onLogInClick = this.onLogInClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { email: 'demoUser@gmail.com', password: 'demoUser' };
        this.props.login(demoUser);
    }


    render() {
    return <>
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
            <div className='jobyssey-home-text'>
                <h1 className='jobyssey-home-title'>Jobyssey helps you to find your dream job and achieve your goals.</h1>
                <span className='jobyssey-home-body'>Jobyssey's boards, lists and cards enable job seekers to organize and prioritize applications in a fun, flexiable and rewarding way.</span>
                <p className='jobyssey-home-note' >Need to create an account? <span onClick={this.onSignUpClick} className='jobyssey-home-note-link'> Get started</span></p>
                <p className="jobyssey-home-note-link" onClick={this.handleDemo}>Try with Demo Login</p>
            </div>
            <img className='jobyssey-home-img' src={homeImg1} alt='jobyssey homepage'/>
        </section>  

        <section className='personal-task-section'>       
            <img className='jobyssey-task-img' src={homeImg2} alt='jobyssey homepage' />
            <span className='jobyssey-task-text'>
                <h1>Designed for Everyone</h1>
                <span>
                    Whether you are fresh out of college or a professional with many years of experience, Jobyseey helps you stay organized. 
                </span>
            </span>
        </section>
        <section className='personal-task-section'>
            <span className='jobyssey-task-text'>
                <h1>Information at a Glance</h1>
                <span>
                    Dive into the details from application deadline and job description to networking contacts and preparation notes, and more directly to Jobyseey cards.
                </span>
            </span>
            <img className='jobyssey-visual-img' src={homeImg3} alt='jobyssey homepage' />
        </section>
        <section className='personal-task-section'>
            <img className='jobyssey-visual-img' src={homeImg4} alt='jobyssey homepage' />
            <span className='jobyssey-task-text'>
                <h1>Visual your success</h1>
                <span>
                    Jobyseey incorporates the d3-sankey library and generates personalized sankey diagrams to easily visualize the progress of job searching you have accomplished.
                </span>
            </span>
        </section>
        <section className='personal-task-section'>
            <span className='jobyssey-task-text'>
                <h1>Your Data Belongs to You</h1>
                <span>
                    Jobyseey offers the option to export all your data as an Excel or csv file of your choice. So you can easily transport, share and manipulate your information however you want.  
                </span>
            </span>
            <img className='jobyssey-visual-img' src={homeImg5} alt='jobyssey homepage' />
        </section>

        <section className='personal-task-section'>
            <img className='jobyssey-task-img' src={homeImg6} alt='jobyssey homepage' />
            <span className='jobyssey-task-text'>
                <h1>Explore and Share</h1>
                <span>
                    Jobyssey is a safe place for job seekers to share their interviewing experiences. Users can also search and view other job seekers’ experience at different companies on our explore page.
                </span>
            </span>
        </section>

        <section className='join-today-section'>
            <h1>Start Organizing Today</h1>
            <span>Sign up and join job seekers worldwide who are using Jobyseey to find their dream jobs.</span>
            <button onClick={this.onSignUpClick}>Get Started - It's Free!</button>
        </section>

        <section className='contact-us'>
            <a href="https://github.com/tsun34"> <i className='fab fa-github'></i> Charlotte Sun</a>
            <a href="https://github.com/maggieyao1211"> <i className='fab fa-github'></i> Maggie Yao</a>
            <a href="https://github.com/xiaoyu322"> <i className='fab fa-github'></i> Philip Tynan</a>
            <a href="https://github.com/tynan415"> <i className='fab fa-github'></i> Xiao Yu</a>

        </section>


        {/* <div className='footer'>
            <div className='footer-content' >
                <span>About</span>
                <span>Privacy & Terms</span>
                <span>Question?</span>
                <span>Manage your account and privacy</span>
            </div>
            <Link to='/'> <img className='footer-logo' src={logo} alt="logo" /></Link>
            <div>
            </div>
        </div> */}
        <div className='back-to-top-btn' onClick={this.onBackToTopClick}> <i className='fas fa-arrow-up'></i></div>
    </>
    }
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../pics/jobyssey_logo.png'
import '../../css/homepage.css'
import search from '../../pics/jobsearch.jpg'

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
                {/* <li><a href="#" className='home-nav-other'>Github</a></li>
                <li><a href="#" className='home-nav-other'>Linkedin</a></li> */}
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
                <h1 className='jobyssey-home-title'>Jobyssey helps you presue your goal</h1>
                <span className='jobyssey-home-body'>Stay on track</span>
                <ul className='jobyssey-home-buttons'>
                    <li>
                        <Link to='/login'>TRY FOR FREE</Link>
                    </li>
                    <li>
                        <a href="#">CONTACT US</a>
                    </li>
                </ul>
                <p className='jobyssey-home-note'>Need to create an account? <Link to="/login" className='slant-home-note-link'> Get started</Link></p>
            </div>
            <img className='jobyssey-home-img' src={search} alt='jobyssey homepage'/>
        </section>  
    </div>
    }
};

export default HomePage;
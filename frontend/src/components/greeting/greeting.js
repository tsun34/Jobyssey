import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/greeting.css';
import { GrUserExpert } from 'react-icons/gr';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingLogout: false,
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.onCreateJobClick = this.onCreateJobClick.bind(this);
    }

    onCreateJobClick(e) {
        e.preventDefault();
        this.props.openModal('create_job');
    }
    
    logoutUser(e){
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const currentUser = this.props.currentUser;
        return (
        <div className="greeting-wrapper">
            <div className="greeting-user-container">
                <div className="greeting-user-container-top">
                    <span className="greeting-user-dropdown">
                        <i className="fas fa-heart greeting-user" aria-hidden="true"></i>
                        {`Hi, ${currentUser.name}`}
                        <div className="greeting-user-row" onClick={this.logoutUser}>Logout</div>
                    </span>

                </div>
                <div className="greeting-title">Trust The Timing Of Your Life</div>
            </div>
            
            <div className="greeting-right-section">
                <div className="greeting-button-wrapper-top">
                    <Link to="/" className="greeting-button">Home</Link>
                    <Link to="/explore" className="greeting-button">Explore</Link>
                    <Link to="/myprogress" className="greeting-button">My Progress</Link>
                    <Link to="/" className="greeting-button">Export Data</Link>
                </div>
                <button className="greeting-create-job" onClick={this.onCreateJobClick}><i className="fas fa-plus"> </i> Create Job</button>
            </div>
        </div>
        );
    }
}

export default Greeting;
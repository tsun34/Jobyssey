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
        return (
        <div className="greeting-wrapper">
            <div className="greeting-title">Trust The Timing Of Your Life</div>
            <div className="greeting-right-section">
                <div className="greeting-button-wrapper-top">
                    <div>
                        <button className="greeting-button" Link to='/'>Home</button>
                        <button className="greeting-button">Explore</button>
                        <button className="greeting-button">My Progress</button>
                        <button className="greeting-button">Export Data</button>
                    </div>
                    <div className="greeting-user-create-job">
                        <button className="greeting-create-job" onClick={this.onCreateJobClick}>Create Job</button>
                        <div className="greeting-user-container">
                            <GrUserExpert className="greeting-user" />
                            <span>{`Hi, Demo `}</span>
                            <div className="greeting-user-dropdown">
                                <div className="greeting-user-row" onClick={this.logoutUser}>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Greeting;
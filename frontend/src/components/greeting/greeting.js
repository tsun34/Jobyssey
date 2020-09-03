import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/greeting.css';

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
            <div className="greeting-right-section">
                <div className="greeting-button-wrapper-top">
                    <button className="greeting-button" to='/'>Home</button>

                    <button className="greeting-button">Explore</button>
                    <button className="greeting-button">My Progress</button>
                    <button className="greeting-button">Export Data</button>
                    <button className="greeting-button" onClick={this.logoutUser}>Logout</button>
                    <div className="greeting-button-right">
                        <button className="greeting-create-job" onClick={this.onCreateJobClick}>Create Job</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Greeting;
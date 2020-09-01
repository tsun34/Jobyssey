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
    }
    
    logoutUser(e){
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
        <div className="greeting-wrapper">
            <div>Trust The Timing Of Your Life</div>
            <button className="greeting-button" onClick={this.logoutUser}>Logout</button>
            <div className="greeting-right-section">
                <div className="greeting-button-wrapper-top">
                    <button className="greeting-button" Link to='/'>Home</button>
                    <button className="greeting-button">Explore</button>
                    <button className="greeting-button">My Progress</button>
                    <button className="greeting-button">Export Data</button>
                </div>
                <div className="greeting-button-wrapper-below">
                    <button className="greeting-button">Create Job</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Greeting;
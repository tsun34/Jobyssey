import React from 'react';
import '../../css/greeting.css';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingLogout: false,
        }
    }
    
    render() {
        return (
        <div className="greeting-wrapper">
            <div>Trust The Timing Of Your Life</div>
            <div className="greeting-right-section">
                <div className="greeting-button-wrapper-top">
                    <button className="greeting-button">Home</button>
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
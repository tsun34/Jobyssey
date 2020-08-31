import React from 'react';
import '../css/greeting.css';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingLogout: false,
        }
        this.onSignInClick = this.onSignInClick.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
    }

    onSignInClick() {
        this.props.openModal('sign_in');
    }

    onSignUpClick() {
        this.props.openModal('sign_up');
    }
    
    render() {
        return (
        <div className="greeting-wrapper">
            <div>Trust The Timing Of Your Life</div>
            <div className="greeting-right-section">
                <div className="greeting-button-wrapper-top">
                    <button className="greeting-button" Link to='/'>Home</button>
                    <button className="greeting-button">Explore</button>
                    <button className="greeting-button">My Progress</button>
                    <button className="greeting-button">Export Data</button>
                </div>
                <div className="greeting-button-wrapper-below">
                    <button className="greeting-button" onClick={this.onSignUpClick}>Sign Up</button>
                    <button className="greeting-button" onClick={this.onSignInClick}>Login In</button>
                    <button className="greeting-button">Create Job</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Greeting;
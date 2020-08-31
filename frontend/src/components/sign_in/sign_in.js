import React from 'react';
import '../../css/sign_up_log_in.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    onSignupClick(e) {
        e.preventDefault();
        this.props.openModal('sign_up');
    }

    render() {
        return (
            <div className="sign-container">
                <form className="sign-form">
                    <input
                        className="sign-input"
                        placeholder="Email *"
                        type="email"
                        required
                     />
                    <input
                        className="sign-input"
                        placeholder="Password *"
                        type="password"
                        required
                    />
                    <button className="sign-button" type="submit">Log in</button>
                    <button className="sign-button">Demo Login</button>
                    <br />
                    <span>Don't have an account? <a href=""  onClick={e => this.onSignupClick(e)}>Sign up</a></span>
                </form>
            </div>
        );
    }
}

export default SignIn;

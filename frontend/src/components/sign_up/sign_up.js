import React from 'react';
import '../../css/sign_up_log_in.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    onSigninClick(e) {
        e.preventDefault();
        this.props.openModal('sign_in');
    }

    render() {
        const { firstName, lastName, email, password, loading } = this.state;
        return (
            <div className="sign-container">
                <form className="sign-form" onSubmit={this.onLetsOmakaseClick}>
                    <input
                        className="sign-input"
                        placeholder="First Name *"
                        type="text"
                        value={firstName}
                        onChange={e => this.setState({first_name: e.currentTarget.value})}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Last Name *"
                        type="text"
                        value={lastName}
                        onChange={e => this.setState({last_name: e.currentTarget.value})}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Email *"
                        type="email"
                        value={email}
                        onChange={e => this.setState({email: e.currentTarget.value})}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Password *"
                        type="password"
                        value={password}
                        pattern=".{6,}"
                        title="6 characters minimum"
                        onChange={e => this.setState({password: e.currentTarget.value})}
                        required
                    />
                    <button className="sign-button">Sign up</button>
                    <br />
                    <span>Already have an account? <a href="" onClick={e => this.onSigninClick(e)}>Log in</a></span>
                </form>
            </div>
        );
    }
}

export default SignUp;

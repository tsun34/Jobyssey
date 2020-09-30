import React from 'react';
import '../../css/sign_up_log_in.css';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    onSignupClick(e) {
        e.preventDefault();
        this.props.openModal('sign_up');
    }

    update(field) {
        return e=> this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user);
        // if (!this.state.errors){
        //     this.props.closeModal();

        // }
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {email: 'demoUser@gmail.com', password: 'demoUser'};
        this.props.login(demoUser);
        this.props.closeModal();
    }

    renderErrors() {
        return(
            <ul className="login-errors">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        )
    }


    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors})
    }

    render() {
        return (
            <div className="sign-container">
                <form className="sign-form" onSubmit={this.handleSubmit}>
                    <input
                        className="sign-input"
                        placeholder="Email *"
                        type="email"
                        onChange={this.update('email')}
                        required
                     />
                    <input
                        className="sign-input"
                        placeholder="Password *"
                        type="password"
                        onChange={this.update('password')}
                        required
                    />
                    <button className="sign-button" type="submit">Log in</button>
                    <button className="sign-button" onClick={this.handleDemo}>Demo Login</button>
                    <br />
                    <span>Don't have an account? <a href="" onClick={e => this.onSignupClick(e)}>Sign up</a></span>
                    {Object.keys(this.state.errors).length > 0? this.renderErrors() : null}
                </form>
                {/* <button onClick={this.handleDemo}>Continue as Demo User</button> */}
            </div>
        );
    }
}

export default withRouter(SignIn);

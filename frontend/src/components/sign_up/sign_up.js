import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/sign_up_log_in.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    onSigninClick(e) {
        e.preventDefault();
        this.props.openModal('sign_in');
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        }) 
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.signup(user)//, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        )
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.signedIn === true){
        //     this.props.history.push('/login');
        // }
        this.setState({errors: nextProps.errors})
    }

    render() {
        console.log(this.state);
        return (
            <div className="sign-container">
                <form className="sign-form" onSubmit={this.handleSubmit}>
                    <input
                        className="sign-input"
                        placeholder="Name *"
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Email *"
                        type="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Password *"
                        type="password"
                        value={this.state.password}
                        pattern=".{6,}"
                        title="6 characters minimum"
                        onChange={this.update('password')}
                        required
                    />
                    <input
                        className="sign-input"
                        placeholder="Confirm Password *"
                        type="password"
                        value={this.state.password2}
                        pattern=".{6,}"
                        title="6 characters minimum"
                        onChange={this.update('password2')}
                        required
                    />
                    <button className="sign-button">Sign up</button>
                    <br />
                    <span>Already have an account? <a href="" onClick={e => this.onSigninClick(e)}>Log in</a></span>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default SignUp;

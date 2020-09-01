import React from 'react';
import '../../css/landing-page.css';
import '../../css/sign_up_log_in.css';

class LandingCreateJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            position: '',
            category: '',
        };
        this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
        this.onPositionChange = this.onPositionChange.bind(this);
    }

    onCompanyNameChange(e) {
        e.preventDefault();
        this.setState({companyName: e.currentTarget.value});
    }

    onPositionChange(e) {
        e.preventDefault();
        this.setState({position: e.currentTarget.value});
    }

    render() {
        const { companyName, position, category } = this.state;
        return (
            <div className="sign-container">
                <form className="sign-form">
                    <input
                        className="sign-input"
                        onChange={this.onCompanyNameChange}
                        placeholder="Company Name *"
                        type="text"
                        value={companyName}
                        required
                     />
                    <input
                        className="sign-input"
                        onChange={this.onPositionChange}
                        placeholder="Position *"
                        type="text"
                        value={position}
                        required
                    />
                    <div className="landing-menu-container">
                        <input
                            className="sign-input"
                            placeholder="Category *"
                            type="text"
                            value={category}
                            required
                        />
                        <div className="landing-menu-dropdown">
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'Wishlist'})}>Wishlist</div>
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'Applied'})}>Applied</div>
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'Interview'})}>Interview</div>
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'Offer'})}>Offer</div>
                        </div>
                    </div>
                    <button className="sign-button" type="submit">Create Job</button>
                </form>
            </div>
        );
    }
}

export default LandingCreateJob;
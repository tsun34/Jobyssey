import React from 'react';
import '../../css/landing-page.css';
import '../../css/sign_up_log_in.css';
import '../../css/create_job.css';

class ReviewItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.currentReview.body,
        }
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
    }

    onChangeUpdate(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    onSubmitClick(e) {
        e.preventDefault();
        this.props.editUserReview({
            body: this.state.body,
            _id: this.props.currentReview._id
        }).then(this.props.closeModal())
        .then(() => {
            this.props.fetchCompanyReviews(this.props.currentReview.company);
        })
    }

    render() {
        return (
            <div className="review-input-wrapper">
                <div className="review-input">
                    <div className="leave-reivew-input-text-area-div">
                        <textarea className="leave-reivew-input-text-area" onChange={this.onChangeUpdate('body')} value={this.state.body}/>
                    </div>
                    <div className="review-buttons-wrapper">
                        <button className="review-leave-button" onClick={this.onSubmitClick}>Submit</button>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewItemEdit;
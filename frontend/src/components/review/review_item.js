import React from 'react';
import '../../css/landing-page.css';
import '../../css/sign_up_log_in.css';
import '../../css/create_job.css';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
    }

    onClick() {
        this.props.removeUserReview(this.props.currentReview._id).then(this.props.closeModal())
        .then(()=>{
            this.props.fetchCompanyReviews(this.props.currentReview.company);
        })
    }

    onClickEdit(currentReview) {
        this.props.openModalWithProps('edit_review', currentReview);
    }

    render() {
        // const review = this.props.review
        if ( this.props.currentUserId === this.props.currentReview.user){
            return (
                <div className="review-input-wrapper">
                    <div className="review-input">
                        <div className="leave-reivew-input-text-area-div">
                            <div className="leave-reivew-input-text-area">{this.props.currentReview.body}</div>
                            <span>Posted by You</span>
                        </div>
                        
                        <div className="review-buttons-wrapper">
                            <button className="review-leave-button" onClick={() => this.onClickEdit(this.props.currentReview)}>Edit Review</button>
                            <button className="review-leave-button" onClick={this.onClick}>Delete Review</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="review-input-wrapper">
                    <div className="review-input">
                        <div className="leave-reivew-input-text-area-div">
                            <div className="leave-reivew-input-text-area">{this.props.currentReview.body}</div>
                            <span>Posted by Anonymous</span>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ReviewItem;
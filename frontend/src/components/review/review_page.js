import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/review-page.css';

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openReviewInput: false,
      review: '',
    };
    this.onReviewChange = this.onReviewChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onLeaveReviewClick = this.onLeaveReviewClick.bind(this);
  }

  componentDidMount() {
      const companyId = this.props.match.params.companyId;
      this.props.fetchCompanyReviews(companyId);
      this.props.fetchCompany(companyId);
  }

  onReviewChange(e) {
    e.preventDefault();
    this.setState({review: e.currentTarget.value});
  }

  onSubmitClick(e) {
    e.preventDefault();
  }

  onCancelClick(e) {
    e.preventDefault();
    this.setState({openReviewInput: false});
  }

  onLeaveReviewClick(e) {
    e.preventDefault();
    this.setState({openReviewInput: true});
  }

  render() {
    const { company } = this.props;
    const reviews = this.props.reviews ?? [];
    return (
      <div className="review-wrapper">
        <GreetingContainer />
        <div className="review-company-name">{company.name}</div>
        <div className="review-company-description">{company.description}</div>
        <div className="review-company-reviews">
            <div className="review-title">{reviews.length > 0 ? `What ${reviews.length} reviews are saying` : 'No reviews for this company'}</div>
            <div className="review-input">
              {
                this.state.openReviewInput ? 
                  <div>
                    <textarea className="leave-reivew-input-text-area" onChange={this.onReviewChange} placeholder={`How's your experience interviewing on ${company.name}?`} />
                    <button className="review-submit-button" onClick={this.onSubmitClick}>Submit anonymously</button>
                    <span className="review-cancel-button" onClick={this.onCancelClick}>Cancel</span>
                  </div> : 
                  <button className="review-leave-button" onClick={this.onLeaveReviewClick}>Leave a anonymous review</button>
              }
            </div>
            {
                reviews.map(review =>
                    <div className="review-row" key={review._id}>
                      {review.body}
                      <div>{`Review created on ${review.created_on}`}</div>
                    </div>
                )
            }
        </div>
      </div>
    );
  }
}

export default ReviewPage;
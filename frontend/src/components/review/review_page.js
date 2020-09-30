import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/review-page.css';
import { getRandomBackgroundColor } from '../../util/general_util';
import { Link } from 'react-router-dom';

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
    this.onItemClick = this.onItemClick.bind(this);
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
    this.props.postReview({
      companyId: this.props.match.params.companyId,
      body: this.state.review,
      user: this.props.currentUserId,
    }).then(() => {
      this.props.fetchCompanyReviews(this.props.match.params.companyId);
      this.setState({openReviewInput: false})
    });
  }

  onCancelClick(e) {
    e.preventDefault();
    this.setState({openReviewInput: false});
  }

  onLeaveReviewClick(e) {
    e.preventDefault();
    this.setState({openReviewInput: true});
  }

  onItemClick(review) {
    this.props.openModalWithProps('review_item', review);
  }

  render() {
    const { company } = this.props;
    const reviews = this.props.reviews ?? [];
    return (
      <div className="review-wrapper">
        <GreetingContainer />
        <div style={{ backgroundColor: getRandomBackgroundColor() }} className="review-company-name"> 
          <div>{company.name}</div>
        </div>
        <div className='review-company-description'>{company.description}</div>
        <div className="review-company-reviews">
            <div className="review-input-wrapper">
              {
                this.state.openReviewInput ? 
                  <div className="review-input">
                    <div className="leave-reivew-input-text-area-div">
                      <textarea className="leave-reivew-input-text-area" onChange={this.onReviewChange} placeholder={`How's your experience interviewing on ${company.name}?`} />
                    </div>
                    <div className="review-buttons-wrapper">
                      <button className="review-leave-button" onClick={this.onSubmitClick}>Submit</button>
                      <div className="review-cancel-button" onClick={this.onCancelClick}>Cancel</div>
                    </div>
                  </div> :
                  <div className="review-back-and-leave-wrapper">
                    <Link to="/explore/"><div>Back to Explore</div></Link>
                    <button className="review-leave-button" onClick={this.onLeaveReviewClick}>Leave review</button>
                  </div>
              }
            </div>
          <div >
            {
                reviews.map(
                  (review, idx) =>
                    <div className="review-row" key={idx} onClick={() => this.onItemClick(review)}>
                      <div>{review.body}</div>
                      {
                        (this.props.currentUserId === review.user) ?
                        <span>Posted by You, Click review to edit.</span> : 
                        <span>Posted by Anonymous</span> 
                      }

                    </div>
                )
            }
            {reviews.length > 0 && <Link to="/explore/"><div className="review-back-to-explore-bottom">Back to Explore</div></Link>}
            </div>
        </div>
      </div>
    );
  }
}

export default ReviewPage;
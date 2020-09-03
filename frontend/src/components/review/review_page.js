import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import '../../css/review-page.css';

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const companyId = this.props.match.params.companyId;
      this.props.fetchCompanyReviews(companyId);
      this.props.fetchCompany(companyId);
  }

  render() {
    const { company, reviews } = this.props;
    return (
      <div className="review-wrapper">
        <GreetingContainer />
        <div className="review-company-name">{company.name}</div>
        <div className="review-company-description">{company.description}</div>
        <div className="review-company-reviews">
            {
                (reviews ?? []).map(review =>
                    <div className="review-row" key={review._id}>{review.body}</div>
                )
            }
        </div>
      </div>
    );
  }
}

export default ReviewPage;
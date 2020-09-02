import React from 'react';
import '../../css/explore-page.css';

class ExploreCompanyList extends React.Component {
    render() {
        return (
            <div className="explore-company-container">
                <div style={{backgroundColor: "rgba(10, 180, 87, 0.85)"}} className="explore-company-card">Facebook</div>
                <div style={{backgroundColor: "rgba(76, 106, 164, 0.85)"}} className="explore-company-card">Google</div>
                <div style={{backgroundColor: "rgba(252, 84, 100, 0.85)"}} className="explore-company-card">Airbnb</div>
                <div style={{backgroundColor: "#0077b5"}} className="explore-company-card">Linkedin</div>
                <div style={{backgroundColor: "rgba(252, 84, 100, 0.85)"}} className="explore-company-card">Paypal</div>
                <div style={{backgroundColor: "#0077b5"}} className="explore-company-card">Apple</div>
                <div style={{backgroundColor: "rgba(10, 180, 87, 0.85)"}} className="explore-company-card">Snapchat</div>
                <div style={{backgroundColor: "rgba(76, 106, 164, 0.85)"}} className="explore-company-card">Tiktok</div>
            </div>
        );
      }
}

export default ExploreCompanyList;
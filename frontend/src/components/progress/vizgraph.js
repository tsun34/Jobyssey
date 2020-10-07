import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Chart } from "react-google-charts";
import '../../css/viz.css';

class VizSanChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openCustomInput: false,
          totalApp: 0,
          companyWebsite: 0,
          linkedin: 0,
          glassdoor: 0,
          indeed: 0,
          zipRecruiter: 0,
          handshake: 0,
          otherPlatforms: 0,
          referral: 0,
          companyWebsiteInterview: 0,
          linkedinInterview: 0,
          glassdoorInterview: 0,
          indeedInterview: 0,
          zipRecruiterInterview: 0,
          handshakeInterview: 0,
          otherPlatformsInterview: 0,
          referralInterview: 0,
          companyWebsiteReject: 0,
          linkedinReject: 0,
          glassdoorReject: 0,
          indeedReject: 0,
          zipRecruiterReject: 0,
          handshakeReject: 0,
          otherPlatformsReject: 0,
          referralReject: 0,
          totalOffer: 0
        //   companyWebsiteOffer: 0,
        //   linkedinOffer: 0,
        //   glassdoorOffer: 0,
        //   indeedOffer: 0,
        //   zipRecruiterOffer: 0,
        //   handshakeOffer: 0,
        //   otherPlatformsOffer: 0,
        //   referralOffer: 0,
        };
        this.onClickCreateCustomViz = this.onClickCreateCustomViz.bind(this);
        this.onSubmitCustom = this.onSubmitCustom.bind(this);
        this.onCancelCustom = this.onCancelCustom.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserJobs(this.props.currentUserId)
    }

    getJobsByStage(stage) {
        return Object.values(this.props.jobs.user ?? []).filter(job => job?.stage === stage)
    }

    onCancelCustom(e){
        e.preventDefault();
        this.setState({openCustomInput: false});
    }

    onSubmitCustom(e){
        e.preventDefault();
        let totAppnum = this.state.companyWebsite + 
                        this.state.linkedin + 
                        this.state.glassdoor + 
                        this.state.indeed + 
                        this.state.zipRecruiter + 
                        this.state.handshake + 
                        this.state.otherPlatforms + 
                        this.state.referral ;
        this.setState({
            totalApp: totAppnum,
            openCustomInput: false
        })
    }

    onClickCreateCustomViz(e){
        e.preventDefault();
        this.setState({openCustomInput: true});
    }

    onChangeUpdate(field){
        return e => {
            this.setState({
                [field]: parseInt(e.currentTarget.value)
            })
        }
    }

  render() {
    const wishlistJobs = this.getJobsByStage("wishlist").length;
    const appliedJobs = this.getJobsByStage("applied").length;
    const interviewingJobs = this.getJobsByStage("interviewing").length;
    const offerJobs = this.getJobsByStage("decision").length;
    const sumJobs = wishlistJobs + appliedJobs + interviewingJobs + offerJobs;



    const colors = [
       "#a6cee3",
       "#b2df8a",
       "#fb9a99",
       "#fdbf6f",
       "#cab2d6",
       "#ffff99",
       "#1f78b4",
       "#33a02c",
     ];

    let graphdata;
    console.log(this.state)
    console.log(typeof this.state.companyWebsite)
    if (this.state.totalApp === 0){
        graphdata =  [
          ["From", "To", "# of Applications"],
          ["Total Applications", "Wishlist", sumJobs],
          ["Wishlist", "Applied", appliedJobs],
          ["Applied", "Interviewing", interviewingJobs],
          ["Interviewing", "Decision", offerJobs],
        ];
    }else{
        graphdata = [
          ["From", "To", "# of Applications"],
          ["Total Applications", "via Company Website", this.state.companyWebsite],
          ["Total Applications", "via LinkedIn", this.state.linkedin],
          ["Total Applications", "via Glassdoor", this.state.glassdoor],
          ["Total Applications", "via Indeed", this.state.indeed],
          ["Total Applications", "via ZipRecruiter", this.state.zipRecruiter],
          ["Total Applications", "via Handshake", this.state.handshake],
          ["Total Applications", "via Other Platforms", this.state.otherPlatforms],
          ["Total Applications", "via Referrals", this.state.referral],

          ["via Company Website", "Interview", this.state.companyWebsiteInterview],
          ["via Company Website", "Reject", this.state.companyWebsiteReject],
          ["via Company Website", "No Response", this.state.companyWebsite - this.state.companyWebsiteInterview - this.state.companyWebsiteReject],

            ["via LinkedIn", "Interview", this.state.linkedinInterview],
            ["via LinkedIn", "Reject", this.state.linkedinReject],
            ["via LinkedIn", "No Response", this.state.linkedin - this.state.linkedinInterview - this.state.linkedinReject],

            ["via Glassdoor", "Interview", this.state.glassdoorInterview],
            ["via Glassdoor", "Reject", this.state.glassdoorReject],
            ["via Glassdoor", "No Response", this.state.glassdoor - this.state.glassdoorInterview - this.state.glassdoorReject],

            ["via Indeed", "Interview", this.state.indeedInterview],
            ["via Indeed", "Reject", this.state.indeedReject],
            ["via Indeed", "No Response", this.state.indeed - this.state.indeedInterview - this.state.indeedReject],

            ["via ZipRecruiter", "Interview", this.state.zipRecruiterInterview],
            ["via ZipRecruiter", "Reject", this.state.zipRecruiterReject],
            ["via ZipRecruiter", "No Response", this.state.zipRecruiter - this.state.zipRecruiterInterview - this.state.zipRecruiterReject],

            ["via Handshake", "Interview", this.state.handshakeInterview],
            ["via Handshake", "Reject", this.state.handshakeReject],
            ["via Handshake", "No Response", this.state.handshake - this.state.handshakeInterview - this.state.handshakeReject],

            ["via Other Platforms", "Interview", this.state.otherPlatformsInterview],
            ["via Other Platforms", "Reject", this.state.otherPlatformsReject],
            ["via Other Platforms", "No Response", this.state.otherPlatforms - this.state.otherPlatformsInterview - this.state.otherPlatformsReject],

            ["via Referrals", "Interview", this.state.referralInterview],
            ["via Referrals", "Reject", this.state.referralReject],
            ["via Referrals", "No Response", this.state.referral - this.state.referralInterview - this.state.referralReject],

            ['Interview', "Offer", this.state.totalOffer]
        ];
    }
    return (
        <div>
            <GreetingContainer />
            { (sumJobs === 0)?
                null :
            
            <div className="viz-container">
                <Chart
                className='viz-graph'
                width={"1000px"}
                height={"600px"}
                chartType="Sankey"
                loader={<div>Loading Chart</div>}
                options={{
                    sankey: {
                        node: {
                            label: {
                                // fontName: 'San',
                                fontSize: 20,
                                bold: true,
                                labelPadding: 5
                            },
                            nodePadding: 30,
                            width: 20
                        },
                        link: {
                            colorMode: 'gradient',
                            colors: colors
                        }
                    }
                }}
                data={ graphdata }
                rootProps={{ "data-testid": "1" }}
                />

                <div className='custom-viz-input-wrapper'>
                    {
                        this.state.openCustomInput ? 
                        <form className='custom-viz-input'>
                            <div className="custom-viz-input-top">

                                <div className='custom-viz-input-col'>
                                    <span>How many positions did you apply via ...</span>
                                    {/* <input className="viz-custom-input" onChange={this.onChangeUpdate('totalApp')} type='number' value={this.state.totalApp} required></input> */}
                                    <label className="viz-custom-input">Company Websites: 
                                        <input onChange={this.onChangeUpdate('companyWebsite')} type='number' value={this.state.companyWebsite} required></input>
                                    </label>
                                    <label className="viz-custom-input">Linkedin: 
                                        <input onChange={this.onChangeUpdate('linkedin')} type='number' value={this.state.linkedin} required></input>
                                    </label>
                                    <label className="viz-custom-input">Glassdoor: 
                                        <input onChange={this.onChangeUpdate('glassdoor')} type='number' value={this.state.glassdoor} required></input>
                                    </label>
                                    <label className="viz-custom-input">Indeed: 
                                        <input onChange={this.onChangeUpdate('indeed')} type='number' value={this.state.indeed} required></input>
                                    </label>
                                    <label className="viz-custom-input">ZipRecruiter: 
                                        <input onChange={this.onChangeUpdate('zipRecruiter')} type='number' value={this.state.zipRecruiter} required></input>
                                    </label>
                                    <label className="viz-custom-input">Handshake: 
                                        <input onChange={this.onChangeUpdate('handshake')} type='number' value={this.state.handshake} required></input>
                                    </label>
                                    <label className="viz-custom-input">otherPlatforms: 
                                        <input onChange={this.onChangeUpdate('otherPlatforms')} type='number' value={this.state.otherPlatforms} required></input>
                                    </label>
                                    <label className="viz-custom-input">Referrals: 
                                        <input onChange={this.onChangeUpdate('referral')} type='number' value={this.state.referral} required></input>
                                    </label>

                                </div>
                                <div className='custom-viz-input-col'>
                                    <span>How many interviews did you receive via ...</span>
                                    <label className="viz-custom-input">Company Websites: 
                                        <input onChange={this.onChangeUpdate('companyWebsiteInterview')} type='number' value={this.state.companyWebsiteInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">Linkedin: 
                                        <input onChange={this.onChangeUpdate('linkedinInterview')} type='number' value={this.state.linkedinInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">Glassdoor: 
                                        <input onChange={this.onChangeUpdate('glassdoorInterview')} type='number' value={this.state.glassdoorInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">Indeed: 
                                        <input onChange={this.onChangeUpdate('indeedInterview')} type='number' value={this.state.indeedInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">ZipRecruiter: 
                                        <input onChange={this.onChangeUpdate('zipRecruiterInterview')} type='number' value={this.state.zipRecruiterInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">Handshake:
                                        <input onChange={this.onChangeUpdate('handshakeInterview')} type='number' value={this.state.handshakeInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">otherPlatforms:
                                        <input onChange={this.onChangeUpdate('otherPlatformsInterview')} type='number' value={this.state.otherPlatformsInterview} required></input>
                                    </label>
                                    <label className="viz-custom-input">Referrals:
                                        <input onChange={this.onChangeUpdate('referralInterview')} type='number' value={this.state.referralInterview} required></input>
                                    </label>
                                </div>
                                <div className='custom-viz-input-col'>
                                    <span>How many rejections did you receive via ...</span>
                                    <label className="viz-custom-input">Company Websites: 
                                        <input onChange={this.onChangeUpdate('companyWebsiteReject')} type='number' value={this.state.companyWebsiteReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">Linkedin:
                                        <input onChange={this.onChangeUpdate('linkedinReject')} type='number' value={this.state.linkedinReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">Glassdoor: 
                                        <input onChange={this.onChangeUpdate('glassdoorReject')} type='number' value={this.state.glassdoorReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">Indeed: 
                                        <input onChange={this.onChangeUpdate('indeedReject')} type='number' value={this.state.indeedReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">ZipRecruiter: 
                                        <input onChange={this.onChangeUpdate('zipRecruiterReject')} type='number' value={this.state.zipRecruiterReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">Handshake:
                                        <input onChange={this.onChangeUpdate('handshakeReject')} type='number' value={this.state.handshakeReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">otherPlatforms:
                                        <input onChange={this.onChangeUpdate('otherPlatformsReject')} type='number' value={this.state.otherPlatformsReject} required></input>
                                    </label>
                                    <label className="viz-custom-input">Referrals:
                                        <input onChange={this.onChangeUpdate('referralReject')} type='number' value={this.state.referralReject} required></input>
                                    </label>    
                                </div>
                            </div>
                            <div className="custom-viz-input-bottom">
                                <div className='custom-viz-input-col'>
                                    <span>How many offers did you receive in total?</span>
                                    <input onChange={this.onChangeUpdate('totalOffer')} type='number' value={this.state.totalOffer} required></input>
                                    {/* <input className="viz-custom-input" onChange={this.onChangeUpdate('companyWebsiteOffer')} type='number' value={this.state.companyWebsiteOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('linkedinOffer')} type='number' value={this.state.linkedinOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('glassdoorOffer')} type='number' value={this.state.glassdoorOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('indeedOffer')} type='number' value={this.state.indeedOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('zipRecruiterOffer')} type='number' value={this.state.zipRecruiterOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('handshakeOffer')} type='number' value={this.state.handshakeOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('otherPlatformsOffer')} type='number' value={this.state.otherPlatformsOffer} required></input>
                                    <input className="viz-custom-input" onChange={this.onChangeUpdate('referralOffer')} type='number' value={this.state.referralOffer} required></input> */}
                                    <button className="viz-create-button" onClick={this.onSubmitCustom}>Submit</button>
                                    <button className="viz-create-button" onClick={this.onCancelCustom}>Cancel</button>
                                </div>

                            </div>
                        </form> 
                        : 
                        <div>
                            <button className='review-leave-button' onClick={this.onClickCreateCustomViz}> Create Custom Progress Graph</button>
                        </div>
                    }
                </div>
            </div>
            }
        </div>
    );
  }
}

export default VizSanChart;

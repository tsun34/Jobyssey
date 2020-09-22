import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Chart } from "react-google-charts";

class VizSanChart extends React.Component {

    componentDidMount() {
        this.props.fetchUserJobs(this.props.currentUserId)
    }

    getJobsByStage(stage) {
        return Object.values(this.props.jobs.user ?? []).filter(job => job?.stage === stage)
    }


  render() {
    const wishlistJobs = this.getJobsByStage("wishlist").length;
    const appliedJobs = this.getJobsByStage("applied").length;
    const inprogressJobs = wishlistJobs - appliedJobs;
    const interviewingJobs = this.getJobsByStage("interviewing").length;
    const offerJobs = this.getJobsByStage("decision").length;
    const rejectJobs = interviewingJobs - offerJobs;
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
    return (
        <div>
            <GreetingContainer />
            <div className="viz-container">
                <Chart
                className='viz-graph'
                width={1000}
                height={"750px"}
                chartType="Sankey"
                loader={<div>Loading Chart</div>}
                options={{
                    sankey: {
                        node: {
                            label: {
                                // fontName: 'San',
                                fontSize: 22,
                                bold: true,
                                labelPadding: 50
                            },
                            nodePadding: 20,
                            width: 20
                        },
                        link: {
                            colorMode: 'gradient',
                            colors: colors
                        }
                    }
                }}
                data={[
                    ["From", "To", "Weight"],
                    ["Total Applications", "Wishlist", sumJobs],
                    ["Wishlist", "Applied", appliedJobs],
                    ["Wishlist", " ", inprogressJobs],
                    ["Applied", "Interviewing", interviewingJobs],
                    [" ", "Interviewing", 0],
                    ["Interviewing", "Offer", offerJobs],
                    ["Interviewing", "Rejection", rejectJobs]
                ]}
                rootProps={{ "data-testid": "1" }}
                />
            </div>
        </div>
    );
  }
}

export default VizSanChart;

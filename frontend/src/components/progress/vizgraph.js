import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Chart } from "react-google-charts";
import '../../css/viz.css';

class VizSanChart extends React.Component {
    // constructor(){
        // {totalApp: 0, 
        // }
    // }

    componentDidMount() {
        this.props.fetchUserJobs(this.props.currentUserId)
    }

    getJobsByStage(stage) {
        return Object.values(this.props.jobs.user ?? []).filter(job => job?.stage === stage)
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
    return (
        <div>
            <GreetingContainer />
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
                data={[
                    ["From", "To", "# of Applications"],
                    ["Total Applications", "Wishlist", sumJobs],
                    ["Wishlist", "Applied", appliedJobs],
                    // ["Wishlist", " ", inprogressJobs],
                    ["Applied", "Interviewing", interviewingJobs],
                    // [" ", "Interviewing", 0],
                    ["Interviewing", "Decision", offerJobs],
                    // ["Interviewing", "Rejection", rejectJobs]
                ]}
                rootProps={{ "data-testid": "1" }}
                />
            </div>
        </div>
    );
  }
}

export default VizSanChart;

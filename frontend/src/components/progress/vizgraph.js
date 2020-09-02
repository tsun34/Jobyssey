import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Chart } from "react-google-charts";

class VizSanChart extends React.Component {
  render() {
    const wishlistJobs = 100;
    const appliedJobs = 80;
    const inprogressJobs = wishlistJobs - appliedJobs;
    const interviewingJobs = 50;
    const offerJobs = 10;
    const rejectJobs = 20;

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
            <div className={"my-pretty-chart-container"}>
                <Chart
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

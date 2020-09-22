import VizSanChart from "./vizgraph";
import { connect } from "react-redux";
import { fetchUserJobs } from "../../actions/job_actions";

const mapStateToProps = ({session, jobs}) => {
    return {
        currentUserId: session.user.id,
        jobs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserJobs: userId => dispatch(fetchUserJobs(userId))
    }
};

const VizContainer = connect(mapStateToProps, mapDispatchToProps)(VizSanChart);

export default VizContainer;
import { connect } from 'react-redux';
import ExploreSearchBar from './explore_search_bar';
import { fetchSearchCompanies } from '../../actions/company_action';


const mstp = state => {
    return {
    };
};

const mdtp = dispatch => {
    return {
        fetchSearchCompanies: data => dispatch(fetchSearchCompanies(data)),
    };
};

export default connect(mstp, mdtp)(ExploreSearchBar);
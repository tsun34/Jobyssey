import { connect } from 'react-redux';
import ExploreCompanyList from './explore_company_list';
import { fetchCompanies } from '../../actions/company_action';


const mstp = ({companies}) => {
    return {
        companies: Object.values(companies.all),
    };
};

const mdtp = dispatch => {
    return {
        fetchCompanies: () => dispatch(fetchCompanies()),
    };
};

export default connect(mstp, mdtp)(ExploreCompanyList);
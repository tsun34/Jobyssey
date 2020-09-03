import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
    
    const [ search, setSearch ] = useState('');
    const [ companies, setCompanies ] = useState()
    
    const fetchCompanies = (query) => {
        setSearch(query);
        axios.post('/api/companies/search-companies', { query })
        .then(results => {
            if (results !== undefined) {
                setCompanies(results.data)
            }
        })
    }

    let companiesNames = [];
    if (companies) {
        companiesNames = companies;
    } 

    return (
        <div>
            <input
                type="text" 
                placeholder="search companies"
                value={search}
                onChange={(e) => fetchCompanies(e.target.value)}
                /> 
            <ul className="searchList">
                  {companiesNames.map(item => {
                    return  <li className="searchItem">{item.name}</li>
                  })}
            </ul>
        </div>
    )
}

export default SearchPage;
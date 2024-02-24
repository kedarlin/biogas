import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Wastes = () => {
    const [setFilter, filter] = useState('None');
    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
      };
    return (
        <>
            <Header />
            <div style={{ paddingTop: '90px', paddingLeft: '20%', paddingRight: '20%' }}>
                <div className="scanned-filter">
                    <FontAwesomeIcon icon={faFilter} style={{ marginRight: "5px" }} />
                    <label>Filter : </label>
                    <select
                        name="filter"
                        className="filter-options"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <option value="None"> None </option>
                        <option value="Running"> Running </option>
                        <option value="Finished"> Finished </option>
                        <option value="Aborted"> Aborted </option>
                    </select>
                </div>
            </div>
        </>
    );
}
export default Wastes;
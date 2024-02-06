import React, { useState } from 'react';
import './SortAndFilter.scss';
import Dropdown from './Dropdown';

import { priceOptions } from '../../constants';

const SortAndFilter = ({ onChange, filters }) => {
    return (
        <div className="SortAndFilter">
            <h1>Filters</h1>
            <Dropdown
                options={priceOptions}
                label="Min Price"
                onChange={(value) => {
                    onChange({ ...filters, minPrice: value });
                }}
            />
            <Dropdown
                options={priceOptions}
                label="Max Price"
                onChange={(value) => {
                    onChange({ ...filters, maxPrice: value });
                }}
            />
            <Dropdown
                options={['Asc', 'Desc']}
                label="Sort By Bedrooms"
                onChange={(value) => {
                    onChange({ ...filters, orderBy: value.toLowerCase(), sortBy: 'bedrooms' });
                }}
            />
        </div>
    );
};

export default SortAndFilter;

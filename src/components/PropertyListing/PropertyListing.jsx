import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useFetch from '../../hooks/useFetch';
import { API_END_POINT } from '../../constants'

const PropertyListing = () => {

    const [responseData, isLoading] = useFetch(`${API_END_POINT}/properties`);
    
    return (
        isLoading ? <div data-testid="loader" className='loading' >Loading...</div>:
        <ul className="PropertyListing">
            {responseData?.map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;

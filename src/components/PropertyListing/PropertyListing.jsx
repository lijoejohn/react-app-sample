import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useFetch from '../../hooks/useFetch';

const PropertyListing = () => {

    const [responseData, isLoading] = useFetch('http://localhost:3000/api/properties');
    
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

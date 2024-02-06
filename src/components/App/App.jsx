import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
    const [filters, setFilters] = useState({});

    return (
        <div className="App">
            <Header />
            <main>
                <ErrorBoundary>
                    <SortAndFilter onChange={setFilters} filters={filters} />
                    <PropertyListing filters={filters} />
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default App;

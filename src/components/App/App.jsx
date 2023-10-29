import React from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
            <ErrorBoundary>
                <SortAndFilter />
                <PropertyListing />
            </ErrorBoundary>
            </main>
        </div>
    );
};

export default App;

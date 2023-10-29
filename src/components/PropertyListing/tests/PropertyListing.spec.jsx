import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
const mockusefetch = useFetch;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandoString = () => {
    return (Math.random() + 1).toString(36).substring(7);
}
const getDummyProprty = () => {
    return {
        id: getRandomNumber(1, 10000),
        bedrooms: getRandomNumber(1, 4),
        summary: getRandoString(),
        displayAddress: getRandoString(),
        propertyType: 'Flat',
        price: getRandomNumber(1, 10000),
        branchName: getRandoString(),
        propertyUrl: getRandoString(),
        contactUrl: getRandoString(),
        propertyTitle: getRandoString(),
        mainImage: 'https://media.rightmove.co.uk/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
    }
}

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        mockusefetch.mockReturnValue([Array(5).fill(getDummyProprty()),false])
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
    it('should render loading text', async () => {
        mockusefetch.mockReturnValue([[],true])
        render(<PropertyListing />);
        const loader  = screen.getByTestId('loader')
        expect(loader).toBeInTheDocument();
    });
});

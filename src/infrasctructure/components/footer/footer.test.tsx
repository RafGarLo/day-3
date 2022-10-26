import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Giver Footer component', () => {
    test('When we render the component it should display ISDI', () => {
        render(<Footer />);
        const element = screen.getByText(/ISDI/i);
        expect(element).toBeInTheDocument();
    });
    test('When we render the component should display todays date', () => {
        const expectedDate = new Date().toLocaleString();
        render(<Footer />);
        const element = screen.getByText(expectedDate);
        expect(element).toBeInTheDocument();
    });
});

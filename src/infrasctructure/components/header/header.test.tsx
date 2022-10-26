import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Giver Header component', () => {
    test('When we render the component', () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const element = screen.getByText(/react/i);
        expect(element).toBeInTheDocument();
    });
});

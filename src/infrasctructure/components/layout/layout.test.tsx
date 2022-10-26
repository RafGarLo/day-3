import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Giver Layout component', () => {
    describe('When we render the component', () => {
        test('Component should', () => {
            render(
                <Router>
                    <Layout>
                        <p>Testing layout</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Testing layout/i);
            expect(element).toBeInTheDocument();
        });
    });
});

import { Warrior } from './players';
import { screen, render } from '@testing-library/react';

describe('Given Character component', () => {
    test('When we render the component, it should display family name correctly', () => {
        
        new Warrior (
                name:'Frodo',
                family:'Baggins',
                age: 189,
                weapon: 'ring',
                dexterity: 4,
                message: 'I am keeping it'
         )
        
        const element = screen.getByText(/Baggins/i);
        expect(element).toBeInTheDocument();
    });
});

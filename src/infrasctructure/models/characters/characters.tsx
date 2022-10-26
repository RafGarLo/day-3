import {
    Adviser,
    Warrior,
    King,
    Squire,
} from '../../components/players/players';

export const characters = [
    new King('Joffrey', 'Baratheon', 54, 4),
    new Warrior('Jaime', 'Lannister', 40, 'sword', 7),
    new Warrior('Daenerys', 'Targaryen', 30, 'sword', 6),
    new Adviser({
        name: 'Tyrion',
        family: 'Lannister',
        age: 36,
        advisedPerson: 'Pepe',
    }),
    new Squire('Bronn', '', 28, 'Juancho', 7),
];
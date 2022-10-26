import { Adviser } from '../../components/players/players';
import { Warrior } from '../fighter/fighter';
import { King } from '../king/king';
import { Squire } from '../../components/squire/squire';

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
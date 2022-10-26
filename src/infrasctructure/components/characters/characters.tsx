import { Adviser } from '../adviser/adviser';
import { Warrior } from '../fighter/fighter';
import { King } from '../king/king';
import { Squire } from '../squire/squire';

export const characters = [
    new King('Joffrey', 'Baratheon', 54, 4),
    new Warrior('Jaime', 'Lannister', 40, 'sword', 7),
    new Warrior('Daenerys', 'Targaryen', 30, 'sword', 6),
    new Adviser('Tyrion', 'Lannister', 36, 'Pepe'),
    new Squire('Bronn', '', 28, 'Juancho', 7),
];

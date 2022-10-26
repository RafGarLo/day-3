import { Character } from '../character/character';

export class Squire extends Character {
    servingTo: string;
    pelotism: number;

    constructor(
        name: string,
        family: string,
        age: number,
        servingTo: string,
        pelotism: number
    ) {
        super(name, family, age);
        this.message = 'Soy un loser';
        this.servingTo = servingTo;
        this.pelotism = pelotism;
    }

    communicate(): string {
        return this.message;
    }
}

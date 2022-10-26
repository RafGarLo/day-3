import { Character } from '../character/character';

export class Adviser extends Character {
    advisedPerson: string;

    constructor(
        name: string,
        family: string,
        age: number,
        advisedPerson: string
    ) {
        super(name, family, age);
        this.advisedPerson = advisedPerson;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }

    communicate(): string {
        return this.message;
    }
}

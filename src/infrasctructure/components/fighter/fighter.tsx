import { Character } from '../character/character';

export class Warrior extends Character {
    weapon: string;
    dexterity: number;

    constructor(
        name: string,
        family: string,
        age: number,
        weapon: string,
        dexterity: number
    ) {
        super(name, family, age);
        this.weapon = weapon;
        this.message = 'Primero pego y luego pregunto';
        this.dexterity = dexterity;
    }

    communicate(): string {
        return this.message;
    }
}

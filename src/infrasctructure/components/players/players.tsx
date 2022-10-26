import { Character } from '../character/character';

export class Adviser extends Character {
    advisedPerson: string;

    constructor({
        name,
        family,
        age,
        advisedPerson,
    }: {
        name: string;
        family: string;
        age: number;
        advisedPerson: string;
    }) {
        super(name, family, age);
        this.advisedPerson = advisedPerson;
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
    }

    communicate(): string {
        return this.message;
    }
}

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

export class King extends Character {
    kingdomYears: number;

    constructor(
        name: string,
        family: string,
        age: number,
        kingdomYears: number
    ) {
        super(name, family, age);
        this.kingdomYears = kingdomYears;
        this.message = 'Vais a morir todos';
    }

    communicate(): string {
        return this.message;
    }
}

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

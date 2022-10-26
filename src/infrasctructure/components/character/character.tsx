export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static serie = 'GoT';
    // friend: King | null;

    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        // this.friend = null;
    }

    communicate() {
        return '';
    }

    die() {
        this.lifeStatus = false;
    }
}
declare class Hero {
    name: string;
    strong: number;
    hunger: number;
    health: number;
    constructor(name: string, health: number, hunger: number);
    decreaseHealth(): void;
    war(enemy: any[]): void;
}
declare class Tribe {
    name: string;
    heroes: Hero[];
    constructor(name: string, heroes: Hero[]);
}
declare const s1: Hero;
declare const s2: Hero;
declare const s3: Hero;
declare const s4: Hero;
declare const enemy: Tribe;
declare const m1: Hero;
declare const m2: Hero;
declare const m3: Hero;
declare const m4: Hero;
declare const man: Hero;
declare const me: Tribe;

declare class Hero {
    name: string;
    strong: number;
    hunger: number;
    health: number;
    constructor(name: string, health: number, hunger: number);
    decreaseHealth(): void;
    damageWho(enemy: any[]): void;
}
declare class Enemy {
    name: string;
    heroes: Hero[];
    constructor(name: string, heroes: Hero[]);
}
declare const s1: Hero;
declare const s2: Hero;
declare const s3: Hero;
declare const s4: Hero;
declare const enemy: Enemy;
declare const man: Hero;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
class Hero {
    constructor(name) {
        this.name = "";
        this.health = 100;
        this.strong = 100;
        this.hunger = 100;
        this.name = name;
        this.log = (0, debug_1.default)("app:hero");
    }
    attack() {
        this.log("Attacking");
    }
    amIDead() {
        return this.health <= 0;
    }
    decreaseHealth() {
        if (this.hunger < 0) {
            this.health - 1;
        }
    }
}
class Archer extends Hero {
    attack() {
        this.log("Archer attacking");
    }
}
class Soldier extends Hero {
    constructor() {
        super(...arguments);
        this.strong = 10;
    }
    attack() {
        this.log("Soldier attacking");
    }
}
class Knight extends Hero {
    constructor() {
        super(...arguments);
        this.sword = 4;
    }
    attack() {
        this.log("knight attacking");
    }
}
class king extends Hero {
    attack() {
        this.log("king attacking");
    }
}
class Tribe {
    constructor() {
        this.heroes = [];
    }
    attack() {
        this.heroes.forEach((hero) => {
            hero.attack();
        });
    }
}
const tribe = new Tribe();
const archer2 = new Archer("archer1");
(_a = tribe.heroes) === null || _a === void 0 ? void 0 : _a.push(archer2);
(_b = tribe.heroes) === null || _b === void 0 ? void 0 : _b.push(new Knight("knight"));
(_c = tribe.heroes) === null || _c === void 0 ? void 0 : _c.push(new Soldier("soldier"));
tribe.attack();

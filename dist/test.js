"use strict";
// //import debug from "debug";
class Hero {
    constructor(name, health, hunger) {
        this.name = "";
        this.strong = 1;
        this.name = name;
        this.health = health;
        this.hunger = hunger;
        // man.war(enemy.heroes);
        // this.decreaseHealth();
    }
    decreaseHealth() {
        let DHunger = setInterval(() => {
            if (this.hunger >= 1) {
                // console.log(this.hunger)
                this.hunger--;
            }
            else {
                console.log(`${this.name} huger is 0`);
                clearInterval(DHunger);
                let DHealth = setInterval(() => {
                    if (this.health >= 1) {
                        console.log(`${this.name} health is ${this.health}`);
                        this.health--;
                    }
                    else {
                        clearInterval(DHealth);
                        console.log(`${this.name} is dead of starving.`);
                    }
                }, 1000);
            }
        }, 1000);
    }
    war(enemy) {
        if (this.health >= 1) {
            const enemys = Math.ceil(Math.random() * enemy.length - 1);
            let e = enemy[enemys].name;
            if (enemy[enemys].health <= 1) {
                this.war(enemy);
            }
            else {
                console.log(this.name + " Attacking");
                console.log(e + " is under attack");
                // console.log(e + " health is " + enemy[enemys].health)
                let damage = setInterval(() => {
                    console.log(e + " health is " + enemy[enemys].health);
                    enemy[enemys].health--;
                    console.log(this.name + " health is " + this.health);
                    this.health--;
                    // console.log(enemy[enemys].health)
                    if (this.health <= 1) {
                        clearInterval(damage);
                        console.log(this.name + " is death");
                    }
                    else if (enemy[enemys].health <= 1) {
                        clearInterval(damage);
                        console.log(e + " is death");
                        this.war(enemy);
                    }
                }, 1000);
            }
        }
        else
            console.log(`${this.name} is death`);
    }
}
class Tribe {
    constructor(name, heroes) {
        this.name = "";
        this.name = name;
        this.heroes = heroes;
    }
}
const s1 = new Hero("s1", 5, 0);
const s2 = new Hero("s2", 50, 0);
const s3 = new Hero("s3", 5, 0);
const s4 = new Hero("s4", 5, 0);
const enemy = new Tribe("T1", [s1, s2, s3, s4]);
const m1 = new Hero("m1", 5, 0);
const m2 = new Hero("m2", 5, 0);
const m3 = new Hero("m3", 5, 0);
const m4 = new Hero("m4", 5, 0);
const man = new Hero("man", 10, 0);
const me = new Tribe("me", [m1, m2, m3, m4, man]);
// me.heroes[m1, m2, m3, m4, mam].war(enemy.heroes)
m1.war(enemy.heroes);
m2.war(enemy.heroes);
m3.war(enemy.heroes);
m4.war(enemy.heroes);
man.war(enemy.heroes);

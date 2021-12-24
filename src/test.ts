// //import debug from "debug";
class Hero {
    name: string = "";
    strong: number = 1;
    hunger: number;
    health: number;
    constructor(name: string, health: number, hunger: number) {
        this.name = name;
        this.health = health;
        this.hunger = hunger;
        this.decreaseHealth();

    }

    decreaseHealth() {
        let DHunger = setInterval(() => {
            this.hunger--;
            if (this.hunger <= 0 && this.health > 0) {
                this.health--;
                clearInterval(DHunger)

                let DHealth = setInterval(() => {
                    console.log(`health of ${this.name}  is  ${this.health}`)
                    this.health--
                    if (this.health <= 0) {
                        clearInterval(DHealth)
                        console.log(`${this.name} dead of starving :`);
                    }
                }, 2000)

            }
        }, 1000)
    }
    damageWho(enemy: any[]) {
        const enemys = Math.ceil(Math.random() * enemy.length - 1)
        let e = enemy[enemys].name
        if (enemy[enemys].health <= 0) {
            this.damageWho(enemy)
        } else {
            console.log(this.name + " Attacking");
            console.log(e + " is under attack")
            console.log(e + " health is " + enemy[enemys].health)
            let damage = setInterval(() => {
                enemy[enemys].health--
                if (enemy[enemys].health < 0) {
                    clearInterval(damage)
                }
                console.log(e + " is death")

            }, 1000);
        }
    }
}
class Enemy {
    name: string = "";
    heroes: Hero[];
    constructor(name: string, heroes: Hero[]) {
        this.name = name;
        this.heroes = heroes;
    }
}

const s1 = new Hero("s1", 5, 0);
const s2 = new Hero("s2", 0, 0);
const s3 = new Hero("s3", 0, 0);
const s4 = new Hero("s4", 0, 0);
const enemy = new Enemy("T1", [s1, s2, s3, s4]);
const man = new Hero("man", 10, 5)


man.damageWho(enemy.heroes)
// man.decreaseHealth()

// man.damageWho(enemy.heroes)



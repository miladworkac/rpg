import debug from "debug";
class Hero {
  name: string = "";
  health: number = 100;
  strong: number = 100;
  hunger: number = 100;
  log: debug.Debugger;
  constructor(name: string) {
    this.name = name;
    this.log = debug("app:hero");
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
    this.log("Archer attacking")
  }

}
class Soldier extends Hero {
  attack() {
    this.log("Soldier attacking")
  }
  strong = 10;
}
class Knight extends Hero {
  sword: number = 4;
  attack() {
    this.log("knight attacking")
  }
}
class king extends Hero {
  attack() {
    this.log("king attacking")
  }
}
class Tribe {
  heroes: Hero[] = [];
  attack() {
    this.heroes.forEach((hero) => {
      hero.attack();
    })
  }
}
const tribe = new Tribe();
const archer2 = new Archer("archer1");
tribe.heroes?.push(archer2);
tribe.heroes?.push(new Knight("knight"));
tribe.heroes?.push(new Soldier("soldier"));

tribe.attack();

"use strict";
exports.__esModule = true;
var debug_1 = require("debug");
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.name = "";
        this.health = 100;
        this.strong = 100;
        this.hunger = 100;
        this.name = name;
        this.log = (0, debug_1["default"])("app:hero");
    }
    Hero.prototype.attack = function () {
        this.log("Attacking");
    };
    Hero.prototype.amIDead = function () {
        return this.health <= 0;
    };
    Hero.prototype.decreaseHealth = function () {
        if (this.hunger < 0) {
            this.health - 1;
        }
    };
    return Hero;
}());
